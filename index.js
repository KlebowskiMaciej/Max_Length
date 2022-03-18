//My first code in JS

/*
function LUS(str)
{
        var test = "";

        var maxL = -1;

        if(str==='')
            return 0;

        else if(str.length==1)
            return 1;

        for( let c  of str )
            {
               var current = c.valueOf();
               
               if(test.includes(current))
                    test = test.substring(test.indexOf(current)+1);

                test = test + c.valueOf();
                maxL = Math.max(test.length,maxL);

            }
            
            return  ;
}
*/



	
	function TESTER(s) 
	{
		let arr = new Set();
		for(let i = 0; i < s.length; i++)
		{
			if (arr.has(s[i]))
				return false;

			arr.add(s[i]);
		}
		return true;
	}

	function GenerateString(arr, ind)
	{
		let fin = [];
		fin.push("");

		if (ind == arr.length)
			return fin;

		let tmp = TESTER(arr, ind + 1);
		let ret = tmp;

		for(let i = 0; i < tmp.length; i++) // Unique 
		{
			let test = tmp[i] + arr[ind];

			if (TESTER(test))
				ret.push(test);
		}
		return ret;
	}

	function maxLength(arr)
	{
		let tmp = GenerateString(arr, 0);
		let len = 0;

		for(let i = 0; i < tmp.length; i++)
		{
			len = len > tmp[i].length ? len : tmp[i].length;
		}
		return len;
	}

let s = [];
	s.push("abcdefgh");
	
	document.write(maxLength(s));
