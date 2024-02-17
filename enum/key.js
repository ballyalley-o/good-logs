var Key;
(function (Key) {
    // @error keys
    Key["Connected"] = "CONNECTED \uD83D\uDFE2";
    Key["NotConnected"] = "NOT CONNECTED \uD83D\uDD34";
    Key["Environment"] = "ENVIRONMENT";
    Key["Production"] = "production";
    Key["Development"] = "development";
    // @logger - req
    Key["ReqMethod"] = " Request Method: ";
    Key["ReqURL"] = " Request URL: ";
    Key["ReqTime"] = " Request Time: ";
    // @logger - server
    Key["ServerPort"] = " SERVER PORT: ";
    Key["ServerAPIVersion"] = " API VERSION: ";
    Key["ServerStatus"] = " SERVER STATUS: ";
})(Key || (Key = {}));
export default Key;
