/*!Originally based on the tinynav.js library found at http://tinynav.viljamis.com by @viljamis*/(function($,window,i){$.fn.tinyNav=function(options){var settings=$.extend({'active':'selected','header':false,'indent':'--','depth_count':3},options);return this.each(function(){i++;var $nav=$(this),namespace='tinynav',namespace_i=namespace+i,l_namespace_i='.l_'+namespace_i,$select=$('<select/>').addClass(namespace+' '+namespace_i);if($nav.is('ul,ol')){if(settings.header){$select.append($('<option value="-null-"/>').text(Drupal.t('Navigation')));}
var options='';$nav.addClass('l_'+namespace_i).find('a').each(function(){var indent='';var parent_count=$(this).parents("ul,ol").length;for(var i=1;i<parent_count;i++){indent+=settings.indent;}
if(indent!=''){indent+=' ';}
if(parent_count<settings.depth_count){options+='<option value="'+$(this).attr('href')+'">'+
indent+$(this).text()+
'</option>';}});$select.append(options);$select.find(':eq('+(settings.header+$(l_namespace_i+' li').index($(l_namespace_i+' .'+settings.active))+')')).attr('selected',true);$select.change(function(){if($(this).val()!='-null-'){window.location.href=$(this).val();}});$(l_namespace_i).after($select);}});};})(jQuery,this,0);