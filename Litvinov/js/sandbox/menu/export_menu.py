n = nuke.menu('Nuke')

print n.items().pop().items()[0].name()
print n.items().pop().items()[0].script()
print n.items().pop().items()[0].shortcut()

for menu_item in n.items():
    print menu_item.name()
    for menu_sub in menu_item.items():
       try:
           print '...{}'.format(menu_sub.name())
           print '...{}'.format(menu_sub.script())
           # print '...{}'.format(menu_sub.shortcut())
       except:
            pass

