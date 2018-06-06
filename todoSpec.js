describe('angularjs homepage todo list', function () {
    it('should add a todo', function () { //The describe and it syntax is from the Jasmine framework
        browser.get('https://angularjs.org'); //browser is a global created by Protractor, which is used for browser-level commands such as navigation with browser.getgit

        element(by.model('todoList.todoText')).sendKeys('write first protractor test');
        element(by.css('[value="add"]')).click();

        var todoList = element.all(by.repeater('todo in todoList.todos'));
        expect(todoList.count()).toEqual(3);
        expect(todoList.get(2).getText()).toEqual('write first protractor test');

        // You wrote your first test, cross it off the list
        todoList.get(2).element(by.css('input')).click();
        var completedAmount = element.all(by.css('.done-true'));
        expect(completedAmount.count()).toEqual(2);
    });
});