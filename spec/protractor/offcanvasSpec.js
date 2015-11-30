describe('Offcanvas', function() {
  var offcanvas = element(by.className('offcanvas'));

  it('should open browser and find itself on root', function() {
    browser.get('http://localhost:8000/');
    expect(element(by.className('tags-content')).isDisplayed()).toBeTruthy();
  });

  it('should click on signin link and find itself on signin page', function() {
    element(by.className('uk-navbar-toggle')).click();
    expect(offcanvas.element(by.css("a[ui-sref='signin']")).isDisplayed()).toBeTruthy();
    offcanvas.element(by.css("a[ui-sref='signin']")).click();
    expect(element(by.name('signinForm')).isDisplayed()).toBeTruthy();
    element(by.className('uk-navbar-toggle')).click();
    expect(offcanvas.element(by.css("a[ui-sref='home']")).isDisplayed()).toBeTruthy();
    offcanvas.element(by.css("a[ui-sref='home']")).click();
    expect(element(by.className('tags-content')).isDisplayed()).toBeTruthy();
  });

  it('should click on signup link and find itself on signup page', function() {
    element(by.className('uk-navbar-toggle')).click();
    expect(offcanvas.element(by.css("a[ui-sref=signup]")).isDisplayed()).toBeTruthy();
    offcanvas.element(by.css("a[ui-sref=signup]")).click();
    expect(element(by.name('signupForm')).isDisplayed()).toBeTruthy();
    element(by.className('uk-navbar-toggle')).click();
    expect(offcanvas.element(by.css("[ui-sref='home']")).isDisplayed()).toBeTruthy();
    offcanvas.element(by.css("[ui-sref='home']")).click();
    expect(element(by.className('tags-content')).isDisplayed()).toBeTruthy();
  });

});