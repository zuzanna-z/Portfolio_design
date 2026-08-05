const all_case_info = [
  {
    case_title: "Wikipedia website redesign",
    case_research: `
    <article class="case_txt">
                <p id="case_intro" class="case_text_top_bottom">
                  Wikipedia, the free online encyclopedia is one of the world's
                  largest sources of information and one of the most visited
                  websites. However, even though millions of people use it every
                  day, its design hasn't changed much across the last 25 years.
                  As the design trends moved forward, this project explored how
                  Wikipedia's interface could be redesigned to make it easier
                  and more enjoyable to use. The idea was to improve how content
                  is organized and create a new navigation system while keeping
                  the website trustworthy and accessible. The redesigned
                  interface uses modern design practices and focuses on
                  important user experience principles such as clear navigation,
                  readable typography, strong color contrast, and effective
                  visual hierarchy.
                </p>
                <div id="case_par1_wrap" class="flex">
                  <div id="case_par1" class="case_par">
                    <p>
                      <b>The problem</b><br />
                      While Wikipedia does not struggle with traffic only about
                      0.5% of all its users are editors or registered users.
                      Despite that the UI presented to users logged in and
                      passive lurkers do not differ much. Even though the
                      Wikipedia website had had a very recent uplift to its
                      interface many users still struggle with navigating the
                      website and the individual article pages (as indicated per
                      user research). Through series of interviews with casual
                      users the general sentiment towards Wikipedia could be
                      summarised to:
                    </p>
                    <div id="intro_quote_case">
                      <i
                        >"The contents are good but the interface is old and the
                        navigation confusing"</i
                      >
                    </div>
                    <p>
                      <b>The three personas</b>
                      <br />
                      The user segment tackled in this redesign were the passive
                      users who make up the majority of the Wikipedia's user
                      bass. The user research was condensed into three personas:
                    </p>
                    <div>
                      <div class="persona flex" id="greg">
                        <p>
                          <b>Greg "The Tinder Guy"</b><br />
                          The first persona represents the least committed users
                          of Wikipedia. Greg represents the type of user that
                          tends to enter the site as it is the first link served
                          by their browser. He does a very quick search for
                          information that piques his interest at the moment and
                          he is likely to jump from website to website without
                          exploring any of the additional content. Greg
                          represents the need for an engaging interface and
                          clarity of the page contents.
                        </p>
                        <div class="persona_img_wrapper">
                          <div
                            class="img"
                            style="
                              background-image: url(assets/images/svg/phone.svg);
                              background-size: contain;
                              background-repeat: no-repeat;
                              width: 120px;
                              height: 100px;
                            "
                          ></div>
                        </div>
                      </div>
                      <div class="persona flex" id="roberta">
                        <p>
                          <b>Roberta "The Researcher"</b><br />The second
                          persona represents the users that know exactly what
                          they are looking for. Roberta is focused on one topic
                          and is committed to finding specific information. She
                          cares greatly about the quality and reliability of the
                          information. Roberta highlights the connection between
                          the visual perception of the content and the emotions
                          and expectations it builds within the recipient.
                        </p>
                        <div class="persona_img_wrapper">
                          <div
                            class="img"
                            style="
                              background-image: url(assets/images/svg/glasses.svg);
                              background-size: contain;
                              background-repeat: no-repeat;
                              width: 120px;
                              height: 100px;
                            "
                          ></div>
                        </div>
                      </div>
                      <div class="persona flex" id="anna">
                        <p>
                          <b>Anna "The Lost Child"</b><br />The third persona
                          represents users who place themselves both somewhere
                          between the other two but also can find themselves
                          outside of that spectrum. Anna has a very general idea
                          of what information she is looking for, she needs an
                          overview of the domain and a direction to turn to. She
                          is likely to browse large amounts of content, and
                          makes use of the link-hub system of Wikipedia. She
                          embodies the need for content browsing and ease of the
                          within article navigation.
                        </p>
                        <div class="persona_img_wrapper">
                          <div
                            class="img"
                            style="
                              background-image: url(assets/images/svg/blocks.svg);
                              background-size: contain;
                              background-repeat: no-repeat;
                              width: 120px;
                              height: 100px;
                            "
                          ></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div id="case_par2_wrap">
                  <div id="case_par2" class="case_par">
                    <p>
                      The user research outlined clearly what works and what
                      doesn't for the average user of the Wikipedia. The issues
                      that had to be tackled was the navigation of the website
                      and content as well as the readability of the articles
                      thmeselves.
                    </p>
                    <p>
                      <b>Information Architecture: Can you browse Wikipedia?</b
                      ><br />
                      Wikipedia is a massive archive, spanning over 200 million
                      pages, in a digital space so large a well crafted
                      infrastructure must be implemented to allow all users
                      access to the content and functions they need. The current
                      hypertext pattern used for content navigation is the
                      staple for many of its users and an incredible efficent
                      for content browsing, however navigation towards content
                      not directly related to the page currently browsed becomes
                      quite tideous. <br />
                      The Wikipedia only offers user a possibility of subject
                      browsing once the user finds the Wikipedia's Contents page
                      as a set of links for 12 categories.
                    </p>
                    <p>
                      The solution choosen for this redesign was to add new
                      navigation patterns without removing the ones already
                      applied in the current Wikipedia interface. A simple
                      global navigation bar had been added to the top of the
                      page to allow the user to brows the catageories not just
                      related content. In addition a new category chierarchy has
                      been created through a card sorting method, to help
                      orginse this massive amount of content into a structred
                      database that is comprehensive and could be browsed
                      without explicit target.
                    </p>
                    <div
                      id="IA_image"
                      style="
                        background-image: url(assets/images/cases/IA_nav.png);
                        background-position: center;
                        background-size: contain;
                        background-repeat: no-repeat;
                        width: 100%;
                        aspect-ratio: 3 / 1;
                      "
                    ></div>
                    <div class="image_wiki_par2"></div>
                    <p>
                      <b>Readability: How to deal with the wall of text?</b
                      ><br />
                      Majority of Wikipedia users will every only visit the
                      specific article pages they are intrested in. But the
                      current Wikipedia website welcomes users with a wall of
                      text and long pages. Many users when asked about what
                      would could be improved about the websites design pointed
                      directly to the article structure:
                    </p>
                    <div id="Wiki_art_complains">
                      <p>
                        <i
                          >"I find that the width of the text is sometimes too
                          big, so it becomes too long to comfortably read a
                          section. I also think it can be hard to navigate the
                          reference list on Wikipedia."</i
                        >
                      </p>
                      <p>
                        <i
                          >"Layout and some of the articles are structured weird
                          where the sections could be made clearer"</i
                        >
                      </p>
                      <p><i>"Visual appeal, layout and font"</i></p>
                    </div>
                    <p>
                      Although the current structure of the article pages can
                      still be navigated on desktop with relative ease
                      (especially with the new inclusion of the side navigation)
                      it does not scale well for smaller screens and it is a
                      true nightmare for the mobile user.
                    </p>
                    <p>
                      The redesign article page keeps what the users find most
                      helpful in the overall structure of the page: the side
                      content navigation. What changes is the way the text is
                      presented. The line lenght was changed to only cover about
                      two thirds of the total screen width. The heavy borders
                      and colored boxes have been removed to declutter the
                      already content heavy screen. The following user test
                      found the redesigned interface clean, pleasant and easy to
                      use.
                    </p>
                    <div
                      class="flex"
                      style="
                        height: 40px;
                        width: 100%;
                        justify-content: flex-end;
                      "
                    >
                      <button class="see_design">
                        See design
                        <svg
                          width="9"
                          height="15"
                          viewBox="0 0 9 15"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M7.36377 6.36401C6.81148 6.36401 6.36377 6.81173 6.36377 7.36401C6.36377 7.9163 6.81148 8.36401 7.36377 8.36401V7.36401V6.36401ZM8.07098 8.07112C8.4615 7.6806 8.4615 7.04743 8.07098 6.65691L1.70702 0.292946C1.31649 -0.0975785 0.683326 -0.0975785 0.292802 0.292946C-0.0977225 0.68347 -0.0977225 1.31664 0.292802 1.70716L5.94966 7.36401L0.292802 13.0209C-0.0977225 13.4114 -0.0977225 14.0446 0.292802 14.4351C0.683326 14.8256 1.31649 14.8256 1.70702 14.4351L8.07098 8.07112ZM7.36377 7.36401V8.36401H7.36387V7.36401V6.36401H7.36377V7.36401Z"
                            fill="#a74482"
                          />
                        </svg>
                      </button>
                    </div>
                    <p>
                      <b>Wikipedia's front page: why no one is using it?</b
                      ><br />
                      The Wikipedia does indeed has a front page although most
                      of its users have never seen it. Given how website
                      operates the front page is not considered to be an entry
                      point of importance but perhapse it should. The front page
                      issue for Wikipedia is that it indeed makes sense for an
                      encyclopedia but Wikipedia is much more than that, it is a
                      community and a part of larger organisation. For an entity
                      that relies on users for generating and upkeeping content
                      the front page should become more engaging for the user.
                    </p>
                    <p>
                      The propsed redesign expands the front page beyond simple
                      search bar. This is the place where the Wikimedia
                      foundation can present itself to the lurking vistors and
                      engage them to become regular users.
                    </p>
                    <div
                      class="flex"
                      style="
                        height: 40px;
                        width: 100%;
                        justify-content: flex-end;
                      "
                    >
                      <button class="see_design">
                        See design
                        <svg
                          width="9"
                          height="15"
                          viewBox="0 0 9 15"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M7.36377 6.36401C6.81148 6.36401 6.36377 6.81173 6.36377 7.36401C6.36377 7.9163 6.81148 8.36401 7.36377 8.36401V7.36401V6.36401ZM8.07098 8.07112C8.4615 7.6806 8.4615 7.04743 8.07098 6.65691L1.70702 0.292946C1.31649 -0.0975785 0.683326 -0.0975785 0.292802 0.292946C-0.0977225 0.68347 -0.0977225 1.31664 0.292802 1.70716L5.94966 7.36401L0.292802 13.0209C-0.0977225 13.4114 -0.0977225 14.0446 0.292802 14.4351C0.683326 14.8256 1.31649 14.8256 1.70702 14.4351L8.07098 8.07112ZM7.36377 7.36401V8.36401H7.36387V7.36401V6.36401H7.36377V7.36401Z"
                            fill="#a74482"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
                <div id="case_summary" class="case_text_top_bottom">
                  <p>
                    <b style="line-height: normal; font-weight: 400;"
                      >Why redesign one of the most visited websites in the
                      world?</b
                    >
                    <br />
                  </p>
                  <p>
                    Wikipedia is very unique as it grew very fast and gained a
                    large user base in its early days due to its novelty, it is
                    a precursor and a boehmite in its category, often getting to
                    the top of browser searches because of its massive amounts
                    of content. Knowing that, it is easy to see why Wikipedia is
                    not keen on big expensive changes since it always had and
                    presumably will have people visiting the website. But that
                    does not mean that there are no problems when the user
                    interacts with their interface. <br />
                    Current Wikipedia pushes the task of content access onto
                    external browsers, to the point where as it is today,
                    Wikipedia is not usable without them. This dependability
                    means that the content the encyclopedia offers to the user
                    is only as good as their browser search. The primary goal of
                    this redesign, was to address visual and structural issues,
                    emphasizing improved IA and UX. By prioritizing
                    accessibility and usability, the experience could be
                    enchanced for existing users and attract new ones.
                  </p>
                </div>
              </article>
            `,
    case_design: `<article class="case_txt" style="margin-right: 20px">
                <div class="flex" style="align-items: center">
                  <p style="margin-right: 20px">See full design:</p>
                  <button class="full_design_btt" id="full_design_front_page_wiki">Front Page</button
                  ><button class="full_design_btt" id="full_design_article_page_wiki">Article Page</button>
                </div>
                <p><b style="line-height: normal">The Front Page</b></p>
                <img
                  src="assets/images/cases/front_page_wiki_described.png"
                  alt=""
                  style="width: 100%; height: auto"
                />
                <p style="margin-top: 40px">
                  <b style="line-height: normal">The Article Page</b>
                </p>
                <img
                  src="assets/images/cases/article_page_wiki_described.png"
                  alt=""
                  style="width: 100%; height: auto"
                />
              </article>`,
  },
];
