# Todo

> [!TIP]
>
> Replace `- [ ]` with `- [x]` in the list to mark an item as "done".

## High priority

- [x] Complete `lib > pixels > stripGreen()`

- [x] Complete `lib > pixels > stripBlue()`

- [x] Complete `lib > pixels > invert()`

- [x] Complete `lib > pixels > grayScale()`

- [x] Complete `lib > pixels > blackAndWhite()`

- [x] Complete `lib > pixels > colorChannel()`

- [x] Complete `lib > pixels > sepia()`

- [x] Complete `lib > pixels > adjustBrightness()`

## Backlog

### Improve file output naming

The output is always `"output.jpg"` but it would be good if it were
`"cat-output.jpg"` or something. This way, if someone is working with another
image, say `"dog.jpg"`, then the output would be `"dog-output.jpg"` and it won't
overwrite the cat output.

Can you have a go at figuring this out? I think you need to look in
`lib/converter.js`. Thanks!

### Feedback in terminal

When an image is modified and the output is saved, it would be great if a
message was logged in the terminal so the user knows where to find it. Maybe
something like `"Great! Output is saved in img/cat-output.jpg"`?

You probably need to take a look at `lib/converter.js` to find out where to put
this.

### Additional features

Are there any more filters we could add to `pixels.js`? Maybe do some research
or just play around with returning different `rgb` arrays to see what you can
do.

If you look at `cli.js` you can copy the pattern for adding a new filter to the
app.
