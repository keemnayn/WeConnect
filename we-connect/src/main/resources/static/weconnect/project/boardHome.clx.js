/*
 * App URI: project/BoardHome
 * Source Location: project/BoardHome.clx
 *
 * This file was generated by eXBuilder6 compiler(1.0.4584), Don't edit manually.
 */
(function() {
	var app = new cpr.core.App("project/boardHome", { 
		onPrepare: function(loader) {
		},
		onCreate: function(/* cpr.core.AppInstance */ app, exports) {
			var linker = {};
			// Start - User Script
			/************************************************
			 * boardHome.js
			 * Created at 2023. 8. 9. 오후 2:35:32.
			 *
			 * @author keemn
			 ************************************************/;
			// End - User Script
			
			// Header
			app.supportMedia("all and (min-width: 1024px)", "default");
			app.supportMedia("all and (min-width: 500px) and (max-width: 1023px)", "tablet");
			app.supportMedia("all and (max-width: 499px)", "mobile");
			
			// Configure root container
			var container = app.getContainer();
			container.style.css({
				"width" : "100%",
				"height" : "100%"
			});
			
			// Layout
			var responsiveXYLayout_1 = new cpr.controls.layouts.ResponsiveXYLayout();
			container.setLayout(responsiveXYLayout_1);
			
			// UI Configuration
			var group_1 = new cpr.controls.Container();
			var xYLayout_1 = new cpr.controls.layouts.XYLayout();
			group_1.setLayout(xYLayout_1);
			container.addChild(group_1, {
				positions: [
					{
						"media": "all and (min-width: 1024px)",
						"top": "90px",
						"left": "43px",
						"width": "1400px",
						"height": "800px"
					}, 
					{
						"media": "all and (min-width: 500px) and (max-width: 1023px)",
						"top": "90px",
						"left": "21px",
						"width": "684px",
						"height": "800px"
					}, 
					{
						"media": "all and (max-width: 499px)",
						"top": "90px",
						"left": "15px",
						"width": "479px",
						"height": "800px"
					}
				]
			});
		}
	});
	app.title = "boardHome";
	cpr.core.Platform.INSTANCE.register(app);
})();
