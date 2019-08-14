module.exports = function(grunt) {
  require('jit-grunt')(grunt);
  
  grunt.initConfig({
    less: {
      development: {
        options: {
          compress: true,
          yuicompress: true,
          optimization: 2
        },
        files: {
          "assets/css/bootstrap.css": "node_modules/bootstrap-less/bootstrap/bootstrap.less",
          "assets/css/main.css": "assets/src/less/main.less"  
        }
      }
    },
    copy: {
      main: {
        files: [
          {
            cwd: 'node_modules/bootstrap-less',
            expand: true, 
            src: ["fonts/**" ], 
            dest: "assets/"
          },
          {
            expand: true, 
            filter: 'isFile',
            flatten: true,
            src: ["node_modules/bootstrap-less/js/bootstrap.min.js"], 
            dest: "assets/js"
          },
          {
            expand: true, 
            filter: 'isFile',
            flatten: true,
            src: ["node_modules/jquery/dist/jquery.min.js"], 
            dest: "assets/js"
          },
          {
            expand: true, 
            filter: 'isFile',
            flatten: true,
            src: ["node_modules/jquery.cookie/jquery.cookie.js"], 
            dest: "assets/js"
          },
          {
            expand: true, 
            filter: 'isFile',
            flatten: true,
            src: ["node_modules/jquery-migrate/dist/jquery-migrate.min.js"], 
            dest: "assets/js"
          },
          {
            expand: true, 
            src: ["node_modules/font-awesome/css/font-awesome.css" ], 
            filter: 'isFile',
            flatten: true,
            dest: "assets/css"
          },
          {
            cwd: 'node_modules/font-awesome',
            expand: true, 
            src: ["fonts/**" ], 
            dest: "assets/"
          }
        ],
      },
    },
    watch: {
      styles: {
        files: ['assets/src/less/*.less'], 
        tasks: ['less'],
        options: {
          nospawn: true
        }
      }
    }
  });
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.registerTask('default', ['less', 'watch', 'copy']);
  // grunt.registerTask('default', ['less', 'copy']);
  
};