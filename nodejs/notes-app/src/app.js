const yargs = require('yargs');
const notes = require('./notes');


yargs.command(
    {
        command: 'add',
        describe: 'Add new note',
        builder: {
            title: {
                describe: 'Note title',
                demandOption: true,
                type: 'string'
            },
            body: {
                describe: 'Note body',
                demandOption: true,
                type: 'string'
            }
        },
        handler(argv) {
            console.log('Adding new note!')
            console.log('Title: ' + argv.title)
            console.log('Body: ' + argv.body)
            notes.add(argv.title, argv.body)
        }
    }
)

yargs.command(
    {
        command: 'remove',
        describe: 'Remove a note given its title',
        builder: {
            title: {
                describe: 'Note title',
                demandOption: true,
                type: 'string'
            }
        },
        handler(argv) {
            console.log('Removing %s note!', argv.title)
            notes.remove(argv.title)
        }
    }
)


yargs.command(
    {
        command: 'list',
        describe: 'List all notes',
        handler() {
            console.log('Notes:')
            notes.list()
        }
    }
)

yargs.command(
    {
        command: 'read',
        describe: 'Read a note',
        builder: {
            title: {
                describe: 'Note title',
                demandOption: true,
                type: 'string'
            }
        },
        handler(argv) {
            console.log('Reading title ' + argv.title)
            notes.read(argv.title)
        }
    }
)


yargs.parse()