$(document).ready(function () {
    'use strict';

    jQuery('input[type="file"]').change(function () {
        var file_name = this.value.replace(/\\/g, '/').replace(/.*\//, '');
        $('#choosen_file').val(file_name);
        console.log(file_name)
    });

});