var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var SearchHistorySchema = new Schema ({

	title: {
		type: String
	},
	date: {
		type: Date
	},
	url: {
		type: String
	}
});

var SearchHistory = mongoose.model("SearchHistory", SearchHistorySchema);

module.exports = SearchHistory;