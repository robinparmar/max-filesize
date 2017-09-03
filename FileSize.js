// FileSize.js

// returns the size of the file in bytes
// [prepend] the full file path with "sizeme"

inlets = 1;
outlets = 1;

function sizeme(s) {
	var sizer = 0;
	var f = new File(s);
	
	if (f.isopen) {
		sizer = f.eof;
		f.close();
	}
	outlet(0, sizer);
}
