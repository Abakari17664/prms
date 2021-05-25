frappe.pages['project-videos'].on_page_load = function(wrapper) {
	var page = frappe.ui.make_app_page({
		parent: wrapper,
		title: 'PRMS - MEDIA CENTER',
		single_column: true
	});
	//addting a html file on the page video
		$(frappe.render_template("project_videos", this)).appendTo(this.page.main); 
}


// frappe.pages['project-videos'].on_page_load = function(wrapper) {
// 	new MyPage(wrapper);
// }
// MyPage = Class.extend({
// init: function(wrapper) {
//    this.page = frappe.ui.make_app_page({
// 	   parent: wrapper,
// 	   title: 'PRMS',
// 	   single_column: true
//    });
//    this.make();
// },
// make: function() {
//    $(frappe.render_template("project_videos", this)).appendTo(this.page.main);
// }
// })

// https://discuss.erpnext.com/t/custom-page-how-to-connect-html-template/42111/6