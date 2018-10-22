/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /* This test  loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */

         it('has a URL defined and that the URL is not empty', function() {
            allFeeds.forEach(function(item) {
                expect(item.url).toBeDefined();
                expect(item.url).not.toBe("");
            });
         });


        /* This test loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */

         it('has a name defined and that is not empty', function() {
            allFeeds.forEach(function(item) {
                expect(item.name).toBeDefined();
                expect(item.name).not.toBe("");
            });
         });
    });


    /*
    /* Created a new test suite named "The menu" */
    describe('The menu', function() {
        /* This test ensures the menu element is
         * hidden by default.
         */
         it('is hidden by default', function() {
            const isMenuHidden = document.getElementsByClassName('menu-hidden');
            expect(isMenuHidden.length).not.toBe(0);
         });
         /* This test ensures the menu changes
          * visibility when the menu icon is clicked.
          */
          it('changes visibility when the menu is clicked', function() {
            $('.menu-icon-link').click();
            expect($(body).hasClass('menu-hidden')).toBe(false);

            $('.menu-icon-link').click();
            expect($(body).hasClass('menu-hidden')).toBe(true);
          });
      });

    /* Created a new test suite named "Initial Entries" */
     describe('Initial Entries', function() {
        /* This test ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         */
         beforeEach(function(done) {
            loadFeed(0,function() {
                done();
            });
        });
         it('has atleast one entry', function(){
            const entries=$('.feed .entry');
            expect(entries.length).toBeGreaterThan(0);           
         });
    });

    /* Created a new test suite named "New Feed Selection" */
    describe('New Feed Selection', function(){
        /* This test ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         */
        let firstFeed,secondFeed;

         beforeEach(function(done) {
            loadFeed(1,function() {
                firstFeed=$('.feed').html();
                done();
            });
            loadFeed(0,function() {
                secondFeed=$('.feed').html();
                done();
            });
         });
         it('new feed is loaded and is different',function(){
            expect(firstFeed).not.toBe(secondFeed);
         });
    });
}());
