"""Retrieve documented theatrical artwork; provenance saved in poster-sources.json."""
import time, subprocess, urllib.request, re, json, html, concurrent.futures, pathlib
pages=['Notting_Hill_(film)','How_to_Lose_a_Guy_in_10_Days','The_Holiday','A_Walk_to_Remember','10_Things_I_Hate_About_You',"You%27ve_Got_Mail",'When_Harry_Met_Sally...','Serendipity_(film)','13_Going_on_30','The_Proposal_(2009_film)','Crazy,_Stupid,_Love','Letters_to_Juliet','About_Time_(2013_film)','Love,_Rosie_(film)','Set_It_Up','Pride_%26_Prejudice_(2005_film)','The_Notebook']
p=pathlib.Path('src/movies.ts'); source=p.read_text(); movies=json.loads(source.split('export const movies: Movie[] = ')[1].split('\n];')[0]+']')
def get(url):
 return subprocess.check_output(['curl','-fL','--silent','--show-error','--max-time','35',url])
existing=json.loads(pathlib.Path('public/poster-sources.json').read_text())
def fetch(pair):
 movie,page=pair;
 cached=next((r for r in existing if r['id']==movie['id'] and 'localPath' in r),None)
 if cached:return cached
 time.sleep(3)
 url='https://en.wikipedia.org/wiki/'+page
 try:
  doc=get(url).decode(); match=re.search(r'<meta property="og:image" content="([^"]+)',doc)
  if not match: raise Exception('No poster metadata')
  image=html.unescape(match[1]).split('?')[0]; data=get(image); ext='.png' if '.png' in image.lower() else '.jpg'; path='public/posters/'+movie['id']+ext;pathlib.Path(path).write_bytes(data)
  return {'id':movie['id'],'title':movie['title'],'sourcePage':url,'imageUrl':image,'localPath':'/posters/'+movie['id']+ext,'bytes':len(data)}
 except Exception as e: return {'id':movie['id'],'error':str(e)}
with concurrent.futures.ThreadPoolExecutor(max_workers=1) as pool: results=list(pool.map(fetch,zip(movies,pages)))
pathlib.Path('public/poster-sources.json').write_text(json.dumps(results,indent=2))
for r in results: print(r)
for movie in movies:
 row=next(r for r in results if r['id']==movie['id'])
 if 'localPath' in row:movie['posterUrl']=row['localPath']
 movie['short']=movie['short'].replace('..','.')
head=source.split('export const movies: Movie[] = ')[0];tail=source.split('\n];',1)[1]
p.write_text(head+'export const movies: Movie[] = '+json.dumps(movies,ensure_ascii=False,indent=2)+';'+tail)
