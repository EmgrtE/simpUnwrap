function simpUnwrap(wrap,elem,cont){
	//settings
	var wrap=document.querySelectorAll(wrap),
		elements=document.querySelectorAll(elem),
		container=document.querySelector(cont);
	//remove all wrapped containers
	for(i=0;i<wrap.length;i++){
		wrap[i].parentNode.removeChild(wrap[i]);
	}
	//add elements to container
	for(a=0;a<elements.length;a++){
		container.appendChild(elements[a]);
	}
};
