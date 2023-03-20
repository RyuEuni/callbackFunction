const htmlObj = {
  formGet: `<form method="GET" action="/make">
    <h3>파일 생성</h3>
    <div>
    <label>파일 명 입력</label><br/>
    <input type="text" name="filePath" />
    </div>
    <div>
    <label>내용 입력</label><br/>
    <input type="text" name="fileName" />
    </div> <br/>
    <button type="submit">생성</button>
    </form>`,
  formGetDel: `<form method="GET" action="/deleteOK">
    <h3>파일 삭제</h3>
    <div>
    <label>파일 명 입력</label><br/>
    <input type="text" name="filePath" />
    </div><br/>
    <button type="submit">삭제</button>
    </form>`,
  formPost: `<form method="POST" action="/make">
    <h3>파일 생성</h3>
    <div>
    <label>파일 명 입력</label><br/>
    <input type="text" name="filePath" />
    </div>
    <div>
    <label>내용 입력</label><br/>
    <input type="text" name="fileName" />
    </div> <br/>
    <button type="submit">생성</button>
    </form>`,
  result: `<h3>정상적으로 파일이 생성되었습니다.</h3>`,
  rmFileGo: `
    <form method="GET" action="/delete">
    <button type="submit">파일 삭제하러 가기</button>
    </form>`,
  bodyTag: function(data){
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    </head>
    <body>
    ${data}
    </body>
    </html>`
  },

}
export default htmlObj;