$(function(){
	/* 弹出框的取消 */
	$('body').on('click','.win-ft .cancel',function(){
		$(this).closest('.win').fadeOut()
	})
})