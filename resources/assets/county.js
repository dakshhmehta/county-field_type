function fillCounties(field, state) {
	console.log("Loading counties");

	if($(field).data("required") == 0){
		$(field).html("<option value=\"\">-- Select --</option>");
	}
	else {
		$(field).html("");
	}

	var field_name = $(field).attr("name");

	$.get(APPLICATION_URL+"/field_types/county/"+state, function( data ) {
		for(var k in data){
			$(field).html($(field).html() + "<option value=\""+data[k]+"\" "+((localStorage.getItem(field_name) == k) ? "selected=\"selected\"" : "")+">"+data[k]+"</option>");
		}
	});
}

$(document).ready(function(){
	$('.county_field').each(function(){
		$depends_on = $("select[name="+$(this).data('depends')+"]");
		$field = (this);
		if($depends_on.val() != null && $depends_on.val() != "")
		{
			fillCounties($(this), $depends_on.val());
		}

		$depends_on.change(function(){
			console.log($(this).val());
			fillCounties($field, $(this).val());
		});

		/*$("#'.$name.'").change(function(){
			localStorage.setItem("county", $("#'.$name.'").val());
			console.log(localStorage.getItem("county"));
		});*/

	});
});