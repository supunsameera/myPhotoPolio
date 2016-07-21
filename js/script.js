$(function() {


    $('.category>li').click(function() {
        $('.category li').removeClass('active');
        $(this).addClass('active');
        var category = $(this).text().toLowerCase();

        if (category == "all") {
        	$('#imageSliderLabel').html("IMAGE LIBRARY");
            $('.img-grid-wrapper .thumbnail-wrapper').fadeIn();
        } else {
        	$('#imageSliderLabel').html(category.toUpperCase()+" LIBRARY");
            $('.img-grid-wrapper .thumbnail-wrapper').hide();

            $('.img-grid-wrapper .thumbnail-wrapper').each(function() {
                if ($(this).hasClass(category)) {
                    $(this).fadeIn();
                }
            });
        }

    });

var clickElemenet;
    $('.img-grid-wrapper>.thumbnail-wrapper').click(function() {
    	var clickSrc=$(this).find('img').attr('src');
    	clickElemenet=$(this);
    	$('.sliderCurrentImg').attr('src',clickSrc);
        $("#imageSliderContainer").modal('show');

    });


    $('#nextImage').click(function() {
    	var nextSrc=$(clickElemenet).nextAll(':visible').first().children('img').attr('src');
    	var nextElement=$(clickElemenet).nextAll(':visible').first();
    	if(!nextSrc){
    		nextSrc=$(clickElemenet).parent().find('div:visible').first().children('img').attr('src');
    		nextElement=$(clickElemenet).parent().find('div:visible').first();
    	}
    	$('.sliderCurrentImg').attr('src',nextSrc);
    	clickElemenet=nextElement;

    });


    $('#prevImage').click(function() {
    	var prevSrc=$(clickElemenet).prevAll(':visible').first().children('img').attr('src');
    	var prevElement=$(clickElemenet).prevAll(':visible').first();
    	if(!prevSrc){
    		prevSrc=$(clickElemenet).parent().find('div:visible').last().children('img').attr('src');
    		prevElement=$(clickElemenet).parent().find('div:visible').last();
    	}
    	$('.sliderCurrentImg').attr('src',prevSrc);

    	clickElemenet=prevElement;

    });





});

        // var isVisible = query.is(':visible');

        // if (isVisible === true) {
        //     // element is Visible
        // } else {
        //     // element is Hidden
        // }
