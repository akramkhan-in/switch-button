<script>
$(document).ready(function() {
	
$("#check1").each(function() {
    var mycookie = $.cookie($(this).attr('name'));
    if (mycookie && mycookie == "true") {
        $(this).prop('checked', mycookie);
    }
});
$("#check1").change(function() {
    $.cookie($(this).attr("name"), $(this).prop('checked'), {
        path: '/',
        expires: 365
    });
});
	
if ($.cookie('kt_rt_skin') != '1')
    {
$("#check1").click(function() {
$('#check1').attr('checked', true);
if($(this).is(':checked'))
  {
	$.cookie('kt_rt_skin', 'white', {expires: 360, path: '/'});
window.location.reload();
  }

else {
	$.cookie('kt_rt_skin', 'dark', {expires: 360, path: '/'});
window.location.reload();}
});
}
});
</script>
