import pprint

HTMLFRAG = '''
    <div id="{0}">
    <object type="image/svg+xml" data="{1}.svg">
        <p class="warning">
            Your browser does not support SVG!
        </p>
    </object>
    </div>

'''
def main():
    for oct in ['0','1']:
        for pitch in ['c','d','e','f','g', 'a', 'b']:
            divid = '''octave-{0}-pitch-{1}'''.format(oct, pitch)
            n='''{0}+{1}'''.format(pitch, oct)
            command = '''/home/rshea/bin/lilypond -dbackend=svg {0}.ly;mv {0}.svg ../www'''.format(n)
            print(command)
    print("")
    arrforjs = []
    for oct in ['0','1']:
        for pitch in ['c','d','e','f','g', 'a','b']:
            divid = '''octave-{0}-pitch-{1}'''.format(oct, pitch)
            n='''{0}+{1}'''.format(pitch, oct)
            htmlfrag = HTMLFRAG.format(divid, n)
            print(htmlfrag)
            print('''<!--- --->''')
            arrforjs.append(divid)
    print("")
    pprint.pprint(arrforjs)
    print("")

if __name__ == "__main__":
    main()
