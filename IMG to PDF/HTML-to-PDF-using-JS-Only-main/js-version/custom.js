document.addEventListener('DOMContentLoaded', function () {
	//////////////
	//////////////
	document.querySelector('#btn-print').addEventListener('click', function () {
		// window.print();

		let wspFrame = document.getElementById('frame').contentWindow;
		wspFrame.focus();
		wspFrame.print();
	});
	//////////////
	//////////////

	document.querySelector('#btn-one').addEventListener('click', function () {
		// html2canvas(document.querySelector('#content')).then((canvas) => {
		// 	let base64image = canvas.toDataURL('image/png');
		// 	// console.log(base64image);
		// 	let pdf = new jsPDF('p', 'px', [1600, 1131]);
		// 	pdf.addImage(base64image, 'PNG', 15, 15, 1110, 360);
		// 	pdf.save('webtylepress-two.pdf');
		// });

		let htmlElement = document.getElementById('content');
		var options = {
			pagebreak: { mode: 'avoid-all' } // Apply page breaks
		};

    // html2pdf().from(htmlElement).save('Test_module_details.pdf');
	// var content = document.getElementById('content');
    html2pdf(content, {
        margin: 10,
        filename: 'document.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { dpi: 192, letterRendering: true },
        jsPDF: { unit: 'pt', format: 'a4', orientation: 'portrait' }
    })
	

	.from(htmlElement).set(options).save('Test_module_details.pdf');


	
    html2pdf().from(content).save();

	});
	//////////////
	//////////////
	document.querySelector('#btn-two').addEventListener('click', function () {
		html2canvas(
			document
				.querySelector('iframe')
				.contentWindow.document.querySelector('.receipt-wrap'),
		).then((canvas) => {
			let base64image = canvas.toDataURL('image/png');
			// console.log(base64image);
			let pdf = new jsPDF('p', 'px', [1600, 1131]);
			pdf.addImage(base64image, 'PNG', 15, 15, 1140, 966);
			pdf.save('webtylepress-receipt.pdf');
		});
	});
	//////////////
	//////////////
});

//--------------------------on change load image 1 --------------------------------------

const inputElement1 = document.getElementById("fileInput1");
inputElement1.addEventListener("change", handleFiles1, false);
function handleFiles1() {
  /* now you can work with the file list */

							var fileInput = document.getElementById('fileInput1');
							
							console.log("fileInput", fileInput);
							// Check if files are selected
							if (fileInput.files.length > 0) {
							var pdf = new jsPDF(); // Create a new PDF document
							
							var promises = [];
							
							// Loop through each selected file
							for (var i = 0; i < fileInput.files.length; i++) {
								var file = fileInput.files[i];
								console.log(file.name);


								
								// Check if the file is an image
								if (file.type.startsWith('image/')) {
								var reader = new FileReader();
								
								promises.push(new Promise(function(resolve, reject) {
									reader.onload = function(event) {
									var img = new Image();
									img.src = event.target.result;
									
									img.onload = function() {
										// Compress image by resizing it
										var maxWidth = 800; // Maximum width for compressed image
										var maxHeight = 600; // Maximum height for compressed image
										var width = img.width;
										var height = img.height;
										
										if (width > maxWidth || height > maxHeight) {
										if (width / height > maxWidth / maxHeight) {
											width = maxWidth;
											height = Math.round(maxWidth * img.height / img.width);
										} else {
											height = maxHeight;
											width = Math.round(maxHeight * img.width / img.height);
										}
										}
										
								//         // Create a canvas element for the compressed image
										var canvas = document.createElement('canvas');
										var ctx = canvas.getContext('2d');
										canvas.width = width;
										canvas.height = height;
										
								//         // Draw the compressed image on the canvas
										ctx.drawImage(img, 0, 0, img.width, img.height, 0, 0, width, height);
										
								//         // Convert canvas to data URL representing the compressed image
										var dataUrl = canvas.toDataURL('image/png', 0.7); // Adjust quality as needed
										

										var base64Url  = [];

										base64Url.push(dataUrl);

										console.log("base64Url legnth", base64Url.length) ;

										document.getElementById("myImg1").src = dataUrl ;
								//         // Add image to PDF document
										pdf.addImage(dataUrl, 'PNG', 10, 10, 180, 150); // Adjust position and size as needed
										
										resolve();
									};
									};
									
								// Read the file as a data URL
									
									reader.readAsDataURL(file);
								}));
								}

								
								
							}
							
							// After all images are processed, save the PDF
							// console.log("promises", promises);
							
							// Promise.all(promises).then(function() {

							//   // console.log(pdf);
							//   pdf.save('multiple_images_to_pdf.pdf');
							// });
							}



}


//---------------------------------------- on change load image2 -----------------------------


const inputElement2 = document.getElementById("fileInput2");
inputElement2.addEventListener("change", handleFiles2, false);
function handleFiles2() {


				var fileInput = document.getElementById('fileInput2');
				
				console.log("fileInput", fileInput);
				// Check if files are selected
				if (fileInput.files.length > 0) {
				var pdf = new jsPDF(); // Create a new PDF document

				var promises = [];

				// Loop through each selected file
				for (var i = 0; i < fileInput.files.length; i++) {
				var file = fileInput.files[i];
				console.log(file.name);


				
				// Check if the file is an image
				if (file.type.startsWith('image/')) {
					var reader = new FileReader();
					
					promises.push(new Promise(function(resolve, reject) {
					reader.onload = function(event) {
						var img = new Image();
						img.src = event.target.result;
						
						img.onload = function() {
						// Compress image by resizing it
						var maxWidth = 800; // Maximum width for compressed image
						var maxHeight = 600; // Maximum height for compressed image
						var width = img.width;
						var height = img.height;
						
						if (width > maxWidth || height > maxHeight) {
							if (width / height > maxWidth / maxHeight) {
							width = maxWidth;
							height = Math.round(maxWidth * img.height / img.width);
							} else {
							height = maxHeight;
							width = Math.round(maxHeight * img.width / img.height);
							}
						}
						
				//         // Create a canvas element for the compressed image
						var canvas = document.createElement('canvas');
						var ctx = canvas.getContext('2d');
						canvas.width = width;
						canvas.height = height;
						
				//         // Draw the compressed image on the canvas
						ctx.drawImage(img, 0, 0, img.width, img.height, 0, 0, width, height);
						
				//         // Convert canvas to data URL representing the compressed image
						var dataUrl = canvas.toDataURL('image/png', 0.7); // Adjust quality as needed
						

						var base64Url  = [];

						base64Url.push(dataUrl);

						console.log("base64Url legnth", base64Url.length) ;

						document.getElementById("myImg2").src = dataUrl ;
				//         // Add image to PDF document
						pdf.addImage(dataUrl, 'PNG', 10, 10, 180, 150); // Adjust position and size as needed
						
						resolve();
						};
					};
					
				// Read the file as a data URL
					
					reader.readAsDataURL(file);
					}));
				}

				
				
				}

			
				}

			}


	//--------------------------------------------------------- onchange load image3 ----------------------------------
	
	const inputElement3 = document.getElementById("fileInput3");
	inputElement3.addEventListener("change", handleFiles3, false);
	function handleFiles3() {
	
	
					var fileInput = document.getElementById('fileInput3');
					
					console.log("fileInput", fileInput);
					// Check if files are selected
					if (fileInput.files.length > 0) {
					var pdf = new jsPDF(); // Create a new PDF document
	
					var promises = [];
	
					// Loop through each selected file
					for (var i = 0; i < fileInput.files.length; i++) {
					var file = fileInput.files[i];
					console.log(file.name);
	
	
					
					// Check if the file is an image
					if (file.type.startsWith('image/')) {
						var reader = new FileReader();
						
						promises.push(new Promise(function(resolve, reject) {
						reader.onload = function(event) {
							var img = new Image();
							img.src = event.target.result;
							
							img.onload = function() {
							// Compress image by resizing it
							var maxWidth = 800; // Maximum width for compressed image
							var maxHeight = 600; // Maximum height for compressed image
							var width = img.width;
							var height = img.height;
							
							if (width > maxWidth || height > maxHeight) {
								if (width / height > maxWidth / maxHeight) {
								width = maxWidth;
								height = Math.round(maxWidth * img.height / img.width);
								} else {
								height = maxHeight;
								width = Math.round(maxHeight * img.width / img.height);
								}
							}
							
					//         // Create a canvas element for the compressed image
							var canvas = document.createElement('canvas');
							var ctx = canvas.getContext('2d');
							canvas.width = width;
							canvas.height = height;
							
					//         // Draw the compressed image on the canvas
							ctx.drawImage(img, 0, 0, img.width, img.height, 0, 0, width, height);
							
					//         // Convert canvas to data URL representing the compressed image
							var dataUrl = canvas.toDataURL('image/png', 0.7); // Adjust quality as needed
							
	
							var base64Url  = [];
	
							base64Url.push(dataUrl);
	
							console.log("base64Url legnth", base64Url.length) ;
	
							document.getElementById("myImg3").src = dataUrl ;
					//         // Add image to PDF document
							pdf.addImage(dataUrl, 'PNG', 10, 10, 180, 150); // Adjust position and size as needed
							
							resolve();
							};
						};
						
					// Read the file as a data URL
						
						reader.readAsDataURL(file);
						}));
					}
	
					
					
					}
	
				
					}
	
				}		

	//--------------------------------------------------------- onchange load image4 ----------------------------------
	
	const inputElement4 = document.getElementById("fileInput4");
inputElement4.addEventListener("change", handleFiles4, false);
function handleFiles4() {


				var fileInput = document.getElementById('fileInput4');
				
				console.log("fileInput", fileInput);
				// Check if files are selected
				if (fileInput.files.length > 0) {
				var pdf = new jsPDF(); // Create a new PDF document

				var promises = [];

				// Loop through each selected file
				for (var i = 0; i < fileInput.files.length; i++) {
				var file = fileInput.files[i];
				console.log(file.name);


				
				// Check if the file is an image
				if (file.type.startsWith('image/')) {
					var reader = new FileReader();
					
					promises.push(new Promise(function(resolve, reject) {
					reader.onload = function(event) {
						var img = new Image();
						img.src = event.target.result;
						
						img.onload = function() {
						// Compress image by resizing it
						var maxWidth = 800; // Maximum width for compressed image
						var maxHeight = 600; // Maximum height for compressed image
						var width = img.width;
						var height = img.height;
						
						if (width > maxWidth || height > maxHeight) {
							if (width / height > maxWidth / maxHeight) {
							width = maxWidth;
							height = Math.round(maxWidth * img.height / img.width);
							} else {
							height = maxHeight;
							width = Math.round(maxHeight * img.width / img.height);
							}
						}
						
				//         // Create a canvas element for the compressed image
						var canvas = document.createElement('canvas');
						var ctx = canvas.getContext('2d');
						canvas.width = width;
						canvas.height = height;
						
				//         // Draw the compressed image on the canvas
						ctx.drawImage(img, 0, 0, img.width, img.height, 0, 0, width, height);
						
				//         // Convert canvas to data URL representing the compressed image
						var dataUrl = canvas.toDataURL('image/png', 0.7); // Adjust quality as needed
						

						var base64Url  = [];

						base64Url.push(dataUrl);

						console.log("base64Url legnth", base64Url.length) ;

						document.getElementById("myImg4").src = dataUrl ;
				//         // Add image to PDF document
						pdf.addImage(dataUrl, 'PNG', 10, 10, 180, 150); // Adjust position and size as needed
						
						resolve();
						};
					};
					
				// Read the file as a data URL
					
					reader.readAsDataURL(file);
					}));
				}

				
				
				}

			
				}

			}
			
	//--------------------------------------------------------- onchange load image5 ----------------------------------
	
	const inputElement5 = document.getElementById("fileInput5");
inputElement5.addEventListener("change", handleFiles5, false);
function handleFiles5() {


				var fileInput = document.getElementById('fileInput5');
				
				console.log("fileInput", fileInput);
				// Check if files are selected
				if (fileInput.files.length > 0) {
				var pdf = new jsPDF(); // Create a new PDF document

				var promises = [];

				// Loop through each selected file
				for (var i = 0; i < fileInput.files.length; i++) {
				var file = fileInput.files[i];
				console.log(file.name);


				
				// Check if the file is an image
				if (file.type.startsWith('image/')) {
					var reader = new FileReader();
					
					promises.push(new Promise(function(resolve, reject) {
					reader.onload = function(event) {
						var img = new Image();
						img.src = event.target.result;
						
						img.onload = function() {
						// Compress image by resizing it
						var maxWidth = 800; // Maximum width for compressed image
						var maxHeight = 600; // Maximum height for compressed image
						var width = img.width;
						var height = img.height;
						
						if (width > maxWidth || height > maxHeight) {
							if (width / height > maxWidth / maxHeight) {
							width = maxWidth;
							height = Math.round(maxWidth * img.height / img.width);
							} else {
							height = maxHeight;
							width = Math.round(maxHeight * img.width / img.height);
							}
						}
						
				//         // Create a canvas element for the compressed image
						var canvas = document.createElement('canvas');
						var ctx = canvas.getContext('2d');
						canvas.width = width;
						canvas.height = height;
						
				//         // Draw the compressed image on the canvas
						ctx.drawImage(img, 0, 0, img.width, img.height, 0, 0, width, height);
						
				//         // Convert canvas to data URL representing the compressed image
						var dataUrl = canvas.toDataURL('image/png', 0.7); // Adjust quality as needed
						

						var base64Url  = [];

						base64Url.push(dataUrl);

						console.log("base64Url legnth", base64Url.length) ;

						document.getElementById("myImg5").src = dataUrl ;
				//         // Add image to PDF document
						pdf.addImage(dataUrl, 'PNG', 10, 10, 180, 150); // Adjust position and size as needed
						
						resolve();
						};
					};
					
				// Read the file as a data URL
					
					reader.readAsDataURL(file);
					}));
				}

				
				
				}

			
				}

			}
			



				//--------------------------------------------------------- onchange load image6 ----------------------------------
	
	const inputElement6 = document.getElementById("fileInput6");
	inputElement6.addEventListener("change", handleFiles6, false);
	function handleFiles6() {
	
	
					var fileInput = document.getElementById('fileInput6');
					
					console.log("fileInput", fileInput);
					// Check if files are selected
					if (fileInput.files.length > 0) {
					var pdf = new jsPDF(); // Create a new PDF document
	
					var promises = [];
	
					// Loop through each selected file
					for (var i = 0; i < fileInput.files.length; i++) {
					var file = fileInput.files[i];
					console.log(file.name);
	
	
					
					// Check if the file is an image
					if (file.type.startsWith('image/')) {
						var reader = new FileReader();
						
						promises.push(new Promise(function(resolve, reject) {
						reader.onload = function(event) {
							var img = new Image();
							img.src = event.target.result;
							
							img.onload = function() {
							// Compress image by resizing it
							var maxWidth = 800; // Maximum width for compressed image
							var maxHeight = 600; // Maximum height for compressed image
							var width = img.width;
							var height = img.height;
							
							if (width > maxWidth || height > maxHeight) {
								if (width / height > maxWidth / maxHeight) {
								width = maxWidth;
								height = Math.round(maxWidth * img.height / img.width);
								} else {
								height = maxHeight;
								width = Math.round(maxHeight * img.width / img.height);
								}
							}
							
					//         // Create a canvas element for the compressed image
							var canvas = document.createElement('canvas');
							var ctx = canvas.getContext('2d');
							canvas.width = width;
							canvas.height = height;
							
					//         // Draw the compressed image on the canvas
							ctx.drawImage(img, 0, 0, img.width, img.height, 0, 0, width, height);
							
					//         // Convert canvas to data URL representing the compressed image
							var dataUrl = canvas.toDataURL('image/png', 0.7); // Adjust quality as needed
							
	
							var base64Url  = [];
	
							base64Url.push(dataUrl);
	
							console.log("base64Url legnth", base64Url.length) ;
	
							document.getElementById("myImg6").src = dataUrl ;
					//         // Add image to PDF document
							pdf.addImage(dataUrl, 'PNG', 10, 10, 180, 150); // Adjust position and size as needed
							
							resolve();
							};
						};
						
					// Read the file as a data URL
						
						reader.readAsDataURL(file);
						}));
					}
	
					
					
					}
	
				
					}
	
				}
			
				
					//--------------------------------------------------------- onchange load image4 ----------------------------------
	
	const inputElement7 = document.getElementById("fileInput7");
	inputElement7.addEventListener("change", handleFiles7, false);
	function handleFiles7() {
	
	
					var fileInput = document.getElementById('fileInput7');
					
					console.log("fileInput", fileInput);
					// Check if files are selected
					if (fileInput.files.length > 0) {
					var pdf = new jsPDF(); // Create a new PDF document
	
					var promises = [];
	
					// Loop through each selected file
					for (var i = 0; i < fileInput.files.length; i++) {
					var file = fileInput.files[i];
					console.log(file.name);
	
	
					
					// Check if the file is an image
					if (file.type.startsWith('image/')) {
						var reader = new FileReader();
						
						promises.push(new Promise(function(resolve, reject) {
						reader.onload = function(event) {
							var img = new Image();
							img.src = event.target.result;
							
							img.onload = function() {
							// Compress image by resizing it
							var maxWidth = 800; // Maximum width for compressed image
							var maxHeight = 600; // Maximum height for compressed image
							var width = img.width;
							var height = img.height;
							
							if (width > maxWidth || height > maxHeight) {
								if (width / height > maxWidth / maxHeight) {
								width = maxWidth;
								height = Math.round(maxWidth * img.height / img.width);
								} else {
								height = maxHeight;
								width = Math.round(maxHeight * img.width / img.height);
								}
							}
							
					//         // Create a canvas element for the compressed image
							var canvas = document.createElement('canvas');
							var ctx = canvas.getContext('2d');
							canvas.width = width;
							canvas.height = height;
							
					//         // Draw the compressed image on the canvas
							ctx.drawImage(img, 0, 0, img.width, img.height, 0, 0, width, height);
							
					//         // Convert canvas to data URL representing the compressed image
							var dataUrl = canvas.toDataURL('image/png', 0.7); // Adjust quality as needed
							
	
							var base64Url  = [];
	
							base64Url.push(dataUrl);
	
							console.log("base64Url legnth", base64Url.length) ;
	
							document.getElementById("myImg7").src = dataUrl ;
					//         // Add image to PDF document
							pdf.addImage(dataUrl, 'PNG', 10, 10, 180, 150); // Adjust position and size as needed
							
							resolve();
							};
						};
						
					// Read the file as a data URL
						
						reader.readAsDataURL(file);
						}));
					}
	
					
					
					}
	
				
					}
	
				}
			
				
					//--------------------------------------------------------- onchange load image4 ----------------------------------
	
	const inputElement8 = document.getElementById("fileInput8");
	inputElement8.addEventListener("change", handleFiles8, false);
	function handleFiles8() {
	
	
					var fileInput = document.getElementById('fileInput8');
					
					console.log("fileInput", fileInput);
					// Check if files are selected
					if (fileInput.files.length > 0) {
					var pdf = new jsPDF(); // Create a new PDF document
	
					var promises = [];
	
					// Loop through each selected file
					for (var i = 0; i < fileInput.files.length; i++) {
					var file = fileInput.files[i];
					console.log(file.name);
	
	
					
					// Check if the file is an image
					if (file.type.startsWith('image/')) {
						var reader = new FileReader();
						
						promises.push(new Promise(function(resolve, reject) {
						reader.onload = function(event) {
							var img = new Image();
							img.src = event.target.result;
							
							img.onload = function() {
							// Compress image by resizing it
							var maxWidth = 800; // Maximum width for compressed image
							var maxHeight = 600; // Maximum height for compressed image
							var width = img.width;
							var height = img.height;
							
							if (width > maxWidth || height > maxHeight) {
								if (width / height > maxWidth / maxHeight) {
								width = maxWidth;
								height = Math.round(maxWidth * img.height / img.width);
								} else {
								height = maxHeight;
								width = Math.round(maxHeight * img.width / img.height);
								}
							}
							
					//         // Create a canvas element for the compressed image
							var canvas = document.createElement('canvas');
							var ctx = canvas.getContext('2d');
							canvas.width = width;
							canvas.height = height;
							
					//         // Draw the compressed image on the canvas
							ctx.drawImage(img, 0, 0, img.width, img.height, 0, 0, width, height);
							
					//         // Convert canvas to data URL representing the compressed image
							var dataUrl = canvas.toDataURL('image/png', 0.7); // Adjust quality as needed
							
	
							var base64Url  = [];
	
							base64Url.push(dataUrl);
	
							console.log("base64Url legnth", base64Url.length) ;
	
							document.getElementById("myImg8").src = dataUrl ;
					//         // Add image to PDF document
							pdf.addImage(dataUrl, 'PNG', 10, 10, 180, 150); // Adjust position and size as needed
							
							resolve();
							};
						};
						
					// Read the file as a data URL
						
						reader.readAsDataURL(file);
						}));
					}
	
					
					
					}
	
				
					}
	
				}
			
				
					//--------------------------------------------------------- onchange load image4 ----------------------------------
	
	const inputElement9 = document.getElementById("fileInput9");
	inputElement9.addEventListener("change", handleFiles9, false);
	function handleFiles9() {
	
	
					var fileInput = document.getElementById('fileInput9');
					
					console.log("fileInput", fileInput);
					// Check if files are selected
					if (fileInput.files.length > 0) {
					var pdf = new jsPDF(); // Create a new PDF document
	
					var promises = [];
	
					// Loop through each selected file
					for (var i = 0; i < fileInput.files.length; i++) {
					var file = fileInput.files[i];
					console.log(file.name);
	
	
					
					// Check if the file is an image
					if (file.type.startsWith('image/')) {
						var reader = new FileReader();
						
						promises.push(new Promise(function(resolve, reject) {
						reader.onload = function(event) {
							var img = new Image();
							img.src = event.target.result;
							
							img.onload = function() {
							// Compress image by resizing it
							var maxWidth = 800; // Maximum width for compressed image
							var maxHeight = 600; // Maximum height for compressed image
							var width = img.width;
							var height = img.height;
							
							if (width > maxWidth || height > maxHeight) {
								if (width / height > maxWidth / maxHeight) {
								width = maxWidth;
								height = Math.round(maxWidth * img.height / img.width);
								} else {
								height = maxHeight;
								width = Math.round(maxHeight * img.width / img.height);
								}
							}
							
					//         // Create a canvas element for the compressed image
							var canvas = document.createElement('canvas');
							var ctx = canvas.getContext('2d');
							canvas.width = width;
							canvas.height = height;
							
					//         // Draw the compressed image on the canvas
							ctx.drawImage(img, 0, 0, img.width, img.height, 0, 0, width, height);
							
					//         // Convert canvas to data URL representing the compressed image
							var dataUrl = canvas.toDataURL('image/png', 0.7); // Adjust quality as needed
							
	
							var base64Url  = [];
	
							base64Url.push(dataUrl);
	
							console.log("base64Url legnth", base64Url.length) ;
	
							document.getElementById("myImg9").src = dataUrl ;
					//         // Add image to PDF document
							pdf.addImage(dataUrl, 'PNG', 10, 10, 180, 150); // Adjust position and size as needed
							
							resolve();
							};
						};
						
					// Read the file as a data URL
						
						reader.readAsDataURL(file);
						}));
					}
	
					
					
					}
	
				
					}
	
				}
			
				
					//--------------------------------------------------------- onchange load image4 ----------------------------------
	
	const inputElement10 = document.getElementById("fileInput10");
	inputElement10.addEventListener("change", handleFiles10, false);
	function handleFiles10() {
	
	
					var fileInput = document.getElementById('fileInput10');
					
					console.log("fileInput", fileInput);
					// Check if files are selected
					if (fileInput.files.length > 0) {
					var pdf = new jsPDF(); // Create a new PDF document
	
					var promises = [];
	
					// Loop through each selected file
					for (var i = 0; i < fileInput.files.length; i++) {
					var file = fileInput.files[i];
					console.log(file.name);
	
	
					
					// Check if the file is an image
					if (file.type.startsWith('image/')) {
						var reader = new FileReader();
						
						promises.push(new Promise(function(resolve, reject) {
						reader.onload = function(event) {
							var img = new Image();
							img.src = event.target.result;
							
							img.onload = function() {
							// Compress image by resizing it
							var maxWidth = 800; // Maximum width for compressed image
							var maxHeight = 600; // Maximum height for compressed image
							var width = img.width;
							var height = img.height;
							
							if (width > maxWidth || height > maxHeight) {
								if (width / height > maxWidth / maxHeight) {
								width = maxWidth;
								height = Math.round(maxWidth * img.height / img.width);
								} else {
								height = maxHeight;
								width = Math.round(maxHeight * img.width / img.height);
								}
							}
							
					//         // Create a canvas element for the compressed image
							var canvas = document.createElement('canvas');
							var ctx = canvas.getContext('2d');
							canvas.width = width;
							canvas.height = height;
							
					//         // Draw the compressed image on the canvas
							ctx.drawImage(img, 0, 0, img.width, img.height, 0, 0, width, height);
							
					//         // Convert canvas to data URL representing the compressed image
							var dataUrl = canvas.toDataURL('image/png', 0.7); // Adjust quality as needed
							
	
							var base64Url  = [];
	
							base64Url.push(dataUrl);
	
							console.log("base64Url legnth", base64Url.length) ;
	
							document.getElementById("myImg10").src = dataUrl ;
					//         // Add image to PDF document
							pdf.addImage(dataUrl, 'PNG', 10, 10, 180, 150); // Adjust position and size as needed
							
							resolve();
							};
						};
						
					// Read the file as a data URL
						
						reader.readAsDataURL(file);
						}));
					}
	
					
					
					}
	
				
					}
	
				}
			
				
					//--------------------------------------------------------- onchange load image4 ----------------------------------
	
	const inputElement11 = document.getElementById("fileInput11");
	inputElement11.addEventListener("change", handleFiles11, false);
	function handleFiles11() {
	
	
					var fileInput = document.getElementById('fileInput11');
					
					console.log("fileInput", fileInput);
					// Check if files are selected
					if (fileInput.files.length > 0) {
					var pdf = new jsPDF(); // Create a new PDF document
	
					var promises = [];
	
					// Loop through each selected file
					for (var i = 0; i < fileInput.files.length; i++) {
					var file = fileInput.files[i];
					console.log(file.name);
	
	
					
					// Check if the file is an image
					if (file.type.startsWith('image/')) {
						var reader = new FileReader();
						
						promises.push(new Promise(function(resolve, reject) {
						reader.onload = function(event) {
							var img = new Image();
							img.src = event.target.result;
							
							img.onload = function() {
							// Compress image by resizing it
							var maxWidth = 800; // Maximum width for compressed image
							var maxHeight = 600; // Maximum height for compressed image
							var width = img.width;
							var height = img.height;
							
							if (width > maxWidth || height > maxHeight) {
								if (width / height > maxWidth / maxHeight) {
								width = maxWidth;
								height = Math.round(maxWidth * img.height / img.width);
								} else {
								height = maxHeight;
								width = Math.round(maxHeight * img.width / img.height);
								}
							}
							
					//         // Create a canvas element for the compressed image
							var canvas = document.createElement('canvas');
							var ctx = canvas.getContext('2d');
							canvas.width = width;
							canvas.height = height;
							
					//         // Draw the compressed image on the canvas
							ctx.drawImage(img, 0, 0, img.width, img.height, 0, 0, width, height);
							
					//         // Convert canvas to data URL representing the compressed image
							var dataUrl = canvas.toDataURL('image/png', 0.7); // Adjust quality as needed
							
	
							var base64Url  = [];
	
							base64Url.push(dataUrl);
	
							console.log("base64Url legnth", base64Url.length) ;
	
							document.getElementById("myImg11").src = dataUrl ;
					//         // Add image to PDF document
							pdf.addImage(dataUrl, 'PNG', 10, 10, 180, 150); // Adjust position and size as needed
							
							resolve();
							};
						};
						
					// Read the file as a data URL
						
						reader.readAsDataURL(file);
						}));
					}
	
					
					
					}
	
				
					}
	
				}
			
				
