describe('loginControllerTests',function() {
    var mockController, mockScope, mockLocation;

    var credentials = {
        username: "admin",
        password: "password"
    }

    beforeEach(module('app', function() {
    }));

    beforeEach(inject(function($controller,$rootScope) {
        mockScope = $rootScope.$new();

        spyOn(window, 'alert');
        mockLocation = jasmine.createSpyObj('mockLocation', ['path']);

        mockController = $controller('loginController', {
            '$scope': mockScope,
            '$location': mockLocation
        });
    }));

    it('should display alert if credentials are incorrect', function() {
        mockScope.user = {
            username: 'admin2',
            password: 'password'
        }
        mockScope.signIn();
        expect(window.alert).toHaveBeenCalled();
    });

    it('should display alert if credentials are correct', function () {
        mockScope.user = {
            username: 'admin',
            password: 'password'
        }
        mockScope.signIn();
        expect(mockLocation.path).toHaveBeenCalled();
    });
})