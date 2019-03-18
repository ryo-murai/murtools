(function murtools() {
    const mfSite = "https://moneyforward.com/cf";
    if(mfSite != location.href) {
        if(confirm(`This Bookmarklet works only on ${mfSite}\n Do you want to move that site ?`)) {
            window.open(mfSite);
        } else {
            return;
        }
    }

    const csvTitleElems = $('#in_out .fc-header-title > h2');
    const csvTitle = (csvTitleElems.length == 1) ? 
            csvTitleElems.text().replace(/\//g, "").replace(/ /g, "") : "";

    const rows = $('#cf-detail-table tr').toArray();
    const csvdata = rows
        .filter(row => 
            $('td', row).first().find('i.icon-check').length > 0)
        .map(row => $('td', row).toArray()
                .map(td => `"${td.innerText}"`.replace(/\n/g, ' '))
                .join(',')
    ).join('\n');

    const blob = new Blob([ csvdata ], { "type" : "text/csv" });
    const url = window.URL || window.webkitURL;
    $("<a>", {
        class: 'btn btn-info',
        id: `csv-${csvTitle}`,
        download: `${csvTitle}.csv`,
        href: url.createObjectURL(blob),
        text: `DL ${csvTitle}`
    }).appendTo('#js-dl-area');
})();