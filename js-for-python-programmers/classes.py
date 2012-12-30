
class Foo(object):

    def __init__(self, bar):
        print 'Creating a new Foo'
        self.bar = bar

    def zoop(self):
        print 'Foo.zoop invoked: bar = ' + self.bar 

    def zap(self):
        print 'Foo.zap invoked: bar = ' + self.bar 


class Quux(Foo):

    def __init__(self, bar):
        print 'Creating a new Quux'
        Foo.__init__(self, bar)
        
    def zoop(self):
        print 'Quux.zoop invoked.  Invoking Foo.zoop...'
        Foo.zoop(self)

if __name__ == '__main__':
    print 'Starting a python program.'
    foo = Foo('baz')
    foo.zoop()
    foo.zap()
    quux = Quux('quuxBaz')
    quux.zoop()
    quux.zap()

        
