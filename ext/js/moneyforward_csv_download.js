(function murtools() {
    const rows = $('#cf-detail-table tr').toArray();
    const csvdata = rows.map(
        row => $('td', row).toArray()
                .map(td => `"${td.innerText}"`)
                .join(',')
    ).join('\n');

    const blob = new Blob([ csvdata ], { "type" : "text/csv" });
    const url = window.URL || window.webkitURL;
    $("<a>", {
        class: 'btn',
        id: 'my_dl_csv',
        href: url.createObjectURL(blob),
        text: 'CSV Download'
    }).appendTo('#js-dl-area');
})();