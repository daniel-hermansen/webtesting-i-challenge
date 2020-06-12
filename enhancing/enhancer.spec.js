const { succeed, fail, repair } = require('./enhancer.js');
// test away!

it('should run the tests', function() {
    expect(true).toBe(true);
});


describe('enhancer.js', function() {

    describe('succeed()', function(){
        it('should return increase enhancement by 1 when enhancement is < 20', function() {
            expect(succeed("Master Sword", 19, 95 )).toEqual({
                name: "Master Sword",
                enhancement: 20,
                durability: 95,
            })
        })

        it('should have no changes when enhancement level equals 20', function() {
            expect(succeed("Biggoron's Sword", 20, 60)).toEqual({
                name: "Biggoron's Sword", 
                enhancement: 20,
                durability: 60,
            })
        })
    });

    describe('fail()', function() {
        it('should decrease durability by 5 when enhancement is < 15', function() {
            expect(fail("Mirror Shield", 13, 85 )).toMatchObject({
              durability: 80,
            });
        });
        it('should decrease durability by 10 when enhancement is >= 15', function() {
            expect(fail("Mirror Shield", 16, 85 )).toEqual({
                name: "Mirror Shield",
                enhancement: 16,
                durability: 75,
            });
        });
        // it('should decrease enhancement by 1 when enhancement is > 16', function() {
        //     expect(fail("Mirror Shield", 18, 85 )).toMatchObject({
        //         name: "Mirror Shield",
        //         enhancement: 18,
        //         durability: 75,
        //     });
        // });
    });

    describe('repair()', function() {
        it('passing item as an argument should return a new item with durability at 100', function() {
            expect(repair({ name: "Hylian Shield", enhancement: 15})).toStrictEqual({
                name: "Hylian Shield",
                enhancement: 15,
                durability: 100,
            });
        });

    });
});