$(document).ready(function () {

    $('#Customers').dataTable({
        "serverSide": true,
        "filter": true,
        "ajax": {
            "url": "/api/customers",
            "type": "POST",
            "datatype":"json"

        },
        "columnsDefs": [{
            "target": [0],
            "visible": false,
            "searchable": false
        }],
        "columns": [
            { "data": "id", "name": "id", "autowidth": true },
            { "data": "firstName", "name": "FirstName", "autowidth": true },
            { "data": "lastName", "name": "LastName", "autowidth": true },
            { "data": "contact", "name": "Contact", "autowidth": true },
            { "data": "email", "name": "Email", "autowidth": true },
            { "data": "dateOfBirth", "name": "DateOfBirth", "autowidth": true },
            {
                "render": function (data, type, row) { return '<a href="#" class="btn btn-danger" onclick=DeleteCustomer("' + row.id + '");> Delete </a>' },
                "orderable": false

            },
         
        ]
    });
})