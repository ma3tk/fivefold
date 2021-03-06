/// <reference path="../definitions/mocha/mocha.d.ts" />
/// <reference path="../definitions/chai/chai.d.ts" />
/// <reference path="../compiled/fivefold.ts" />
/// <reference path="./fakes.ts" />

module spec {
    chai.should();

    describe('Route', () => {
        it('can initialize with pattern, controller and method', () => {
            var route = new fivefold.Route('/',
                                           'spec.Target',
                                           'hoge');
            route.pattern.should.equal('/');
            route.controller.should.equal('spec.Target');
            route.method.should.equal('hoge');
        });
    });
}
