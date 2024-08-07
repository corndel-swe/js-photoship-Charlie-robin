import { Command } from 'commander'
import { convertRGB } from './lib/converter.js'
import * as pixels from './lib/pixels.js'

const program = new Command()

program.version('1.0.0').description('The Photoship CLI')

// Remove red
program
  .command('strip-red <filename>')
  .description('Remove red from the image')
  .action(filename => convertRGB(filename, pixels.stripRed))

// Remove green
program
  .command('strip-green <filename>')
  .description('Remove green from the image')
  .action(filename => convertRGB(filename, pixels.stripGreen))

// Remove blue
program
  .command('strip-blue <filename>')
  .description('Remove blue from the image')
  .action(filename => convertRGB(filename, pixels.stripBlue))

// Invert
program
  .command('invert <filename>')
  .description('Invert the colours in the image')
  .action(filename => convertRGB(filename, pixels.invert))

// Grayscale
program
  .command('grayscale <filename>')
  .description('Make the image grayscale')
  .action(filename => convertRGB(filename, pixels.grayScale))

// Black and white
program
  .command('black-and-white <filename>')
  .description('Convert to black and white')
  .action(filename => convertRGB(filename, pixels.blackAndWhite))

// Color channel
program
  .command('color-channel <filename> <color>')
  .description('Get the color channel')
  .action((filename, color) =>
    convertRGB(filename, rgb => pixels.colorChannel(rgb, color))
  )

// Sepia
program
  .command('sepia <filename>')
  .description('Convert to sepia')
  .action(filename => convertRGB(filename, pixels.sepia))

// Brightness
program
  .command('adjust-brightness <filename> <brightness>')
  .description('Adjust the brightness')
  .action((filename, brightness) =>
    convertRGB(filename, rgb => pixels.adjustBrightness(rgb, brightness))
  )

// Rotate
program
  .command('rotate <filename>')
  .description('RGB to BRG')
  .action(filename => convertRGB(filename, rgb => pixels.rotate(rgb)))

program.parse(process.argv)
