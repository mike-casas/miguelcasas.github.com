$('<%= j render "modal" %>').on('hidden.bs.modal', function (e) {
   $(this).remove();
}).modal()



