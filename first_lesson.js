/*
  @title   First Lesson
  @by      pandafeche
  @license CC BY-NC-SA (code)
  @details First attempt at making anything with strudel. 
           loopAx from @DJ_Dave: https://strudel.cc/?mTeJt_ICoPrw
*/

samples({
  build_vox: 'samples/vox/vox_0.wav'
}, 'https://raw.githubusercontent.com/scarnecchia/music/main/');

const loopAx = register('loopAx', 
  (l, pat) => pat.loopAt(l).chop(l*8).legato(1).mul(speed(0.99))
);
const setbpm = t => setcps(t/4/60)

setbpm(145)

let rythymn = stack(
  stack(
    n("{0 1 3 5 2}%16").sound("sawtooth").lpf(800),
    n("[5/1]").s("gm_electric_bass_pick").loopAx(2).gain(1.1)
  ),
  sound("<[bd*4, sd*2], hh*2>").bank("RolandTR909"),
  arrange(
    [4, "[0]/8, [5/1]"],
    [1, "<4!, [5/1]>"]
  ).n().s("gm_electric_guitar_clean").loopAx(2))

let prog_1 = //stack(
  n("[F, A, C] [D, F, A] [Bb, D, F]*2 [C, E, G]")
  .scale("F:major")
  .sustain(1).room(.5).size(4)
  .s("supersaw, gm_electric_guitar_clean")
  .lpf(800)
  /* n("0").s("vox").bank("build")
  .chop(4)
  .rev()
  .sustain(1)
  .room(.5)
  .size(4)
  //.loopAx(8)
  .gain(1.1) )*/
                  

let prog_2 = stack(
  n("[F, A, C]*4")
  .scale("F:major")
  .sustain(1).room(.5).size(4)
  .s("supersaw, gm_distortion_guitar")
  .lpf(800),
  n("[F, A, C]*4")
  .scale("F:major")
  .sustain(1).room(.5).size(4)
  .s("supersaw, gm_distortion_guitar")
  .lpf(1300)
)

let prog_3 = stack(
  n("[A, C, E]")
  .scale("A:minor")
  .sustain(1).room(.5).size(8)
  .s("supersaw, gm_distortion_guitar")
  .lpf(800),
   n("[A, C, E]")
  .scale("A:minor")
  .sustain(1).room(.5).size(8)
  .s("supersaw, gm_electric_guitar_clean")
  .lpf(1300)
)

let prog_4 = stack(
  n("[Bb, D, F] [D, F#, A] [F, A, C] [A, C#, E]")
  .scale("Bb:major")
  .sustain(1).room(1).size(4)
  .s("supersaw, gm_distortion_guitar")
  .lpf(800),
  n("[Bb, D, F] [D, F#, A] [F, A, C] [A, C#, E]")
  .scale("Bb:major")
  .sustain(1).room(.5).size(4)
  .s("supersaw, gm_electric_guitar_clean")
  .lpf(1300)
  )

let prog_5 = stack(
  n("[A, C#, E] [F, A, C] [D, F#, A] [E, G#, B]")
  .scale("F:major")
  .sustain(1).room(.5).size(4)
  .s("supersaw, gm_distortion_guitar")
  .lpf(800),
  n("[A, C#, E] [F, A, C] [D, F#, A] [E, G#, B]")
  .scale("F:major")
  .sustain(1).room(.5).size(4)
  .s("supersaw, gm_electric_guitar_clean")
  .lpf(1300)
)

stack(rythymn, 
      arrange([8, prog_1],
              [2, arrange([1, prog_2],
                          [1, prog_3]
                 )
              ],
              [1, prog_4],
              [1, prog_5],
              [1, prog_3],
              [1, silence]
             )
     )

