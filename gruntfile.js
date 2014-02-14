
module.exports = function(grunt) {
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-imagemin')
	grunt.loadNpmTasks('grunt-contrib-compass');
	grunt.loadNpmTasks('grunt-autoprefixer');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.initConfig({
		uglify: {
			my_target: {
				files: {
					'public/js/script.js': ['_/components/js/*.js']
				} // files
			} // my_target
		}, //uglify
		compass: {
			dev: {
				options: {
					config: 'config.rb'
				} //options
			} // dev
		}, // compass
		imagemin: {
		    dynamic: {                         
		      files: [{
		        expand: true,                 
		        cwd: '_/assets/',                   
		        src: ['**/*.{png,jpg,gif}'],   
		        dest: 'public/img/'       
		      }]
		    }
		},
        autoprefixer: {
            dist: {
                files: {
                    'public/css/styles.css': '_/components/scss/build/styles.css'
                }
            },
            options: {
				browsers: ['last 2 version', 'ie 8', 'ie 7']
			}
        },
		cssmin: {
		  combine: {
		    files: {
		      'public/css/styles.css': ['public/css/styles.css']
		    }
		  }
		},
		watch: {
			options: { livereload: true },
			scripts: {
				files: ['_/components/js/*.js'],
				tasks: ['uglify']				
			}, //scripts
			html: {
				files: ['public/index.html'],
			},
			sass: {
				files: ['_/components/scss/**/*.scss'],
				tasks: ['compass:dev']
			},
	        styles: {
                files: ['_/components/scss/build/*.css'],
                tasks: ['autoprefixer','cssmin']
            }, // styles
		} // watch
	}) //initConfig
	grunt.registerTask('default','watch');
} //exports