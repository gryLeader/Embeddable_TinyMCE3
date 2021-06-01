// This list may be created by a server logic page PHP/ASP/ASPX/JSP in some backend system.
// There templates will be displayed as a dropdown in all media dialog if the "template_external_list_url"
// option is defined in TinyMCE init.

var tinyMCETemplateList = [
	//Format: [ Name, Description, HTML ]	
	
	["Simple snippet", "Simple HTML snippet.",	
		"This is just some <strong>code</strong>."],
				
	["Layout", "HTML Layout.",
		'<table border="1">' +
		'<thead>' +
			'<tr>' +
				'<td>Column 1</td>' +
				'<td>Column 2</td>' +
			'</tr>' +
		'</thead>' +
		'<tbody>' +
			'<tr>' +
				'<td>Username: {$username}</td>' +
				'<td>Staffid: {$staffid}</td>' +
			'</tr>' +
		'</tbody>' +
	'</table>']
];