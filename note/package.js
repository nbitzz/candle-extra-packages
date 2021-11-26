window.commands.push({
    name:"note",
    action: function(arg) {
exec(`
base = ""
if (Path(dirname(abspath(__file__))+"/temp/NOTES.txt").exists()):
    base = Path(dirname(abspath(__file__))+"/temp/NOTES.txt").read_text()
Path(dirname(abspath(__file__))+"/temp/NOTES.txt").write_text(base+"\\n${arg.replace(/"/g,"\\\"")}")
`)
candle()
    }
})