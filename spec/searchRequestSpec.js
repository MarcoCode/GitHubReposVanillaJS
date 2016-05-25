"use strict";

describe("searchRequest", function() {
  
  beforeEach(function (done) {
    spyOn(XMLHttpRequest.prototype, "open").and.callThrough();
    spyOn(XMLHttpRequest.prototype, "send").and.returnValue("SENT");
    searchRequest({value: 'username'});
    setTimeout(function () {
      if ((xhttp.readyState === 1) && (xhttp.send() === "SENT")) {
        done();
      }
    }, 500)
  })
  
  it('Opens an XMLHttpRequest call', function () {
    expect(xhttp.readyState).toEqual(1);
  })
  
  it('Sets onreadystatechange to the xhttpResponse function', function () {
    expect(xhttp.onreadystatechange).toEqual(xhttpResponse);
  })
  
  it('Sends the XMLHttpRequest', function () {
    expect(xhttp.send()).toEqual("SENT");
  })
});