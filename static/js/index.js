'use strict';

exports.postAceInit = (name, context, cb) => {
  const userCount = $('#otheruserstable tbody tr').length;
  const isReadOnly = (clientVars.padId.indexOf('r.') === 0);
  if (isReadOnly) return;
  if (userCount < 5) return;

  // disable editing..
  // // TODO: For some reason this isn't working

  $('iframe[name="ace_outer"]').contents().find('iframe')
      .contents().find('body').css('opacity', '0.1');

  $('iframe[name="ace_outer"]').contents().find('#sidediv')
      .css('opacity', '0.1');

  // get the readonly pad id
  $('#readonlyinput').click();
  $('#linkinput').val();

  // show the message to the user.
  $.gritter.add({
    sticky: true,
    title: 'Pad has reached the maximum user limit',
    text: 'Redirecting to the read only pad.',
  });

  setTimeout(() => {
    window.location = `${clientVars.readOnlyId}`;
  }, 3000);
};
