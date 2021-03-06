import * as XLSX from 'xlsx'
import { useResidents } from '../store'
const processData = (dataString: string) => {
  const dataStringLines = dataString.split(/\r\n|\n/)
  const headers = dataStringLines[0].split(
    /,(?![^"]*"(?:(?:[^"]*"){2})*[^"]*$)/
  )

  const list = []
  for (let i = 1; i < dataStringLines.length; i++) {
    const row = dataStringLines[i].split(/,(?![^"]*"(?:(?:[^"]*"){2})*[^"]*$)/)
    if (headers && row.length == headers.length) {
      const obj: any = {}
      for (let j = 0; j < headers.length; j++) {
        let d = row[j]
        if (d.length > 0) {
          if (d[0] == '"') d = d.substring(1, d.length - 1)
          if (d[d.length - 1] == '"') d = d.substring(d.length - 2, 1)
        }
        if (headers[j]) {
          obj[headers[j]] = d
        }
      }

      // remove the blank rows
      if (Object.values(obj).filter(x => x).length > 0) {
        list.push(obj)
      }
    }
  }

  // prepare columns list from headers
  const columns = headers.map(c => ({
    name: c,
    selector: c,
  }))

  return {
    list,
    columns,
  }
}

const Reader = () => {
  const store = useResidents()

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files
    if (!files) return
    const file = files[0]
    const reader = new FileReader()
    reader.onload = async evt => {
      if (!evt.target) return
      /* Parse data */
      const bstr = evt.target.result
      const wb = XLSX.read(bstr, { type: 'binary' })
      /* Get first worksheet */
      const wsname = wb.SheetNames[0]
      const ws = wb.Sheets[wsname]
      /* Convert array of arrays */
      const data = XLSX.utils.sheet_to_csv(ws)
      const results = processData(data)

      console.log(results)

      await store.addMany({ users: results.list })
      store.launchGetAll()
    }
    reader.readAsBinaryString(file)
  }
  return (
    <label className="button primary new cursor-pointer">
      <input
        type="file"
        accept=".csv,.xlsx,.xls"
        onChange={handleFileUpload}
        className="hidden"
      />
      <span className="font-sans">Import from CSV</span>
    </label>
  )
}

export default Reader
