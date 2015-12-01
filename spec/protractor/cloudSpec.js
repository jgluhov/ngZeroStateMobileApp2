var _ = require('lodash');

describe('Cloud', function () {
  var tags = element(by.tagName('tags'));
  var input = element(by.model('tags'));

  it('should open browser and find itself on root', function () {
    browser.get('http://localhost:8000/');
    expect(element(by.className('tags-content')).isPresent()).toBeTruthy();
  });

  it('should check displaying tags cloud', function () {
    expect(tags.element(by.className('input')).isDisplayed()).toBeTruthy();
  });

  it('should show 10 tags on tags cloud', function () {
    expect(element.all(by.tagName('text')).count()).toBe(10);
  });

  it('should send key "d" and cloud should show 10 tags starting on d letter', function () {
    input.sendKeys('d');
    expect(element.all(by.tagName('text')).count()).toBe(10);
    element.all(by.tagName('text')).each(function (element, index) {
      element.getText().then(function (text) {
        var tag = _.trim(text, '# ').toLowerCase();
        expect(tag).toMatch(/d/);
      })
    });
    input.clear();
  });

  it('should show 10 tags after user click the cross button', function () {
    input.sendKeys('d');
    expect(element.all(by.tagName('text')).count()).toBe(10);
    tags.element(by.className('clear-btn')).click();
    expect(element.all(by.tagName('text')).count()).toBe(10);
  });

  it('should finish user writing after user click a tag on the cloud', function () {
    input.sendKeys('d');

    browser.driver.sleep(3000);

    var tag = element.all(by.tagName('text')).first();
    tag.click();

    tag.getText().then(function (name) {
      var name = _.trim(name, '# ').toLowerCase();
      input.getAttribute('value').then(function (text) {
        expect(name).toBe(text)
      });
    });

    input.clear();
  });

  it('should send key "!" and cloud should show 0 tags', function () {
    input.sendKeys('!');
    expect(element.all(by.tagName('text')).count()).toBe(0);
  });


});
