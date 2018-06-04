import pprint

HTMLFRAG = '''
    <!-- Pitch {2} in Octave {3} -->
    <div id="{0}" class="card noteattemptcard noteattemptcardinvisible">
        <div class="card-body">
            <h4 class="card-title">What pitch is this ?</h4>
            <a href="#" class="tellmepitch btn btn-primary">Tell Me</a>
            <a href="#" class="nextpitch btn btn-primary">Next</a>
            <div class="card-body answertextinvisible" id="{0}-answertext">
                <div>
                   <h5 class="lead">The pitch is {2}.</h5> 
                </div>
            </div>
            <!-- ORIGINAL START -->
            <div>
                <object type="image/svg+xml" data="{1}.svg">
                    <p class="warning">
                        Your browser does not support SVG!
                    </p>
                </object>
            </div>
            <!-- ORIGINAL STOP -->
        </div>
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
            htmlfrag = HTMLFRAG.format(divid, n, pitch, oct)
            print(htmlfrag)
            arrforjs.append(divid)
    print("")
    pprint.pprint(arrforjs)
    print("")

if __name__ == "__main__":
    main()
