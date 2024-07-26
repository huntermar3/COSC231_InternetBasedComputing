function insert_content(xhttp) {
	
	document.getElementById("div_note_button").innerHTML = "";

	//this works as it grabs the json data
	const WCH = JSON.parse(xhttp.responseText) ;
	//console.log(WCH) ;

	//Get a reference to the correct portion of the parsed JSON data
	//const WCH_2wk = WCH.WCH_2wk ;

	//empty array
	const WCH_2wk = [] ;

	//WCH.WCH_2k goes into the parsed data then goes into the array called WCH_2wk
	for (let i = 0; i < WCH.WCH_2wk.length; i++) {
		const current = WCH.WCH_2wk[i];

		const newObj = {
			LOCALGAGETIME: current.LOCALGAGETIME,
			UPSTREAM_ELEV: current.UPSTREAM_ELEV
		};

		//add it into the new array.
		WCH_2wk.push(newObj);
	}
	//console.log(WCH_2wk);

		//majority of code will be in this script tag 
		let death_limit = 722;

		//empty array with values we are going to store in it
		const LGTS = [] ;

		//empty object 
		const LGTS_UPES = {} ;
		
		//STEP 4
		//all we care abt is LOCALGAGETIME and UPSTREAM_ELEV. We are putting info into LGTS_UPE
		//also we are using the timestamp(localgagetime) as a key that corresponds to the upstream elev
		for(let i = 0 ; i < WCH_2wk.length ; i++){
			//variable to reach each individual thing we need
			let object = WCH_2wk[i];
			const timestamp = object.LOCALGAGETIME ;
			const elevation = object.UPSTREAM_ELEV.toFixed(2);
			
			LGTS_UPES[timestamp] = elevation ;
		}
		

		//STEP 5
		//loop through LGTS_UPES and insert the timestamps aka localgagetime and store them into LGTS
		//note that LGTS_UPES is an object at this point and not an array can not use .length
		//we have to use a for in loop to loop through our obj LGTS_UPES
		let i = 0 ;
		for(const timestamp in LGTS_UPES) {
			LGTS[i] = timestamp ;
			i++
		}
		//console.log(LGTS) ;

		//STEP 6 
		//sort LGTS we can just use .sort
		LGTS.sort();
		

		//STEP 7
		//use each timestamp at each index to get its 
		//corresponding upstream elevation value that’s still in the object/hash LGTs_UPEs and create rows and
		//these into two values into table data cells. 
		for(let i = 0 ; i < LGTS.length ; i++) {
			//the timestamps are stored in LGTS we can create a vari to reference that
			const timestamps = LGTS[i];

			//the elevation are stored in the hash so we can create a vari to reference that
			const elevation = LGTS_UPES[timestamps] ;

			//we need to create elements so we can start by creating a row
			const row = document.createElement("tr") ;

			//now that the row is created we need to create two seperate cells for timestamps and elevation
			const timestampCell = document.createElement("td") ;
			timestampCell.innerHTML= timestamps;
			timestampCell.classList.add("tbl_row_data") ;

			//second one for elevation
			const elevationCell = document.createElement("td") ;
			elevationCell.innerHTML = elevation ;
			elevationCell.classList.add("tbl_row_data") ;
			if(elevation >= death_limit) {
				elevationCell.classList.add("warning") ;
			} 

			//append new data to the row
			row.appendChild(timestampCell) ;
			row.appendChild(elevationCell) ;
			//console.log(row);

			//now that we have a row we can now append to the table
			let table = document.getElementById("my_table") ;
			//console.log(table) ;
			table.appendChild(row) ;
		}

	}

	



