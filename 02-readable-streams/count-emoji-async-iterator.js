import { createReadStream } from 'fs'
import { EMOJI_MAP } from 'emoji' // from npm

async function main () {
  const emojis = Object.keys(EMOJI_MAP)
  const file = createReadStream(process.argv[2], { encoding: 'utf-8' })
  let counter = 0

  for await (const chunk of file) {
    for (const char of chunk.toString('utf8')) {
      if (emojis.includes(char)) {
        counter++
      }
    }
  }

  console.log(`Found ${counter} emojis`)
}

main()
