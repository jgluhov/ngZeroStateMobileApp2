describe('Authorization', function() {
  var offcanvas = element(by.className('offcanvas'));
  var signinForm = element(by.name('signinForm'));

  it('should open browser and find itself on root', function() {
    browser.get('http://localhost:8000/');
    expect(element(by.className('tags-content')).isPresent()).toBeTruthy();
  });

  it('should click on signin link and find itself on signin page', function() {
    element(by.className('uk-navbar-toggle')).click();
    expect(offcanvas.element(by.css("a[ui-sref='signin']")).isDisplayed()).toBeTruthy();
    offcanvas.element(by.css("a[ui-sref='signin']")).click();
    expect(element(by.name('signinForm')).isDisplayed()).toBeTruthy();
  });

  it('should send invalid data to signin and we should see errors', function() {
    signinForm.element(by.name('email')).sendKeys('jgluhov');
    signinForm.element(by.name('password')).sendKeys('Mathemat1cs');
    signinForm.element(by.buttonText('Sign In')).click();
    expect(signinForm.element(by.name('email')).getAttribute('class')).toMatch(/ng-invalid-email/);
    signinForm.element(by.name('password')).clear();
  });

  it('should send invalid data (only email) and we should see an error', function() {
    signinForm.element(by.name('email')).sendKeys('jgluhov@gmail.com');
    signinForm.element(by.buttonText('Sign In')).click();
    expect(signinForm.element(by.name('password')).getAttribute('class')).toMatch(/ng-invalid-required/);
    signinForm.element(by.name('email')).clear();
  });

  it('should send invalid data (only password) and we should see an error', function() {
    signinForm.element(by.name('password')).sendKeys('Mathemat1cs');
    signinForm.element(by.buttonText('Sign In')).click();
    expect(signinForm.element(by.name('email')).getAttribute('class')).toMatch(/ng-invalid-required/);
    signinForm.element(by.name('password')).clear();
  });

  it('should send valid data to input email and password', function() {
    signinForm.element(by.name('email')).sendKeys('jgluhov@gmail.com');
    signinForm.element(by.name('password')).sendKeys('Mathemat1cs');
    signinForm.element(by.buttonText('Sign In')).click();
    expect(element(by.className('tags-content')).isDisplayed()).toBeTruthy();
    element(by.className('uk-navbar-toggle')).click();
    expect(offcanvas.element(by.binding('user.email')).isDisplayed()).toBeTruthy();
    expect(offcanvas.element(by.binding('user.email')).getText()).toBe('jgluhov@gmail.com')
  });

  it('should signout', function() {
    element(by.className('uk-navbar-toggle')).click();
    expect(offcanvas.element(by.css("a[ng-click='signout()']")).isDisplayed()).toBeTruthy();
    offcanvas.element(by.css("a[ng-click='signout()']")).click();
    expect(element(by.className('tags-content')).isDisplayed()).toBeTruthy();
  });

});
