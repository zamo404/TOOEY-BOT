const schema = mongoose.Schema({
    guildID: String,
    ///user:String,
    prefix: { type: String, default: "K"},
    
});
module.exports = mongoose.model("Guild", schema)
