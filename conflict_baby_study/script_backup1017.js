const baseAudio = "https://raw.githubusercontent.com/childlabusc/lookit-stimuli-template/master/mp3/conflict/";
const baseImage = "https://raw.githubusercontent.com/childlabusc/lookit-stimuli-template/master/img/conflict/";

const json_url = "https://raw.githubusercontent.com/childlabusc/lookit-stimuli-template/refs/heads/master/conflict_baby_study/counterbalance_1017.json";


const jsPsych = initJsPsych({
    on_finish: function() {
        window.location.href = "https://childrenhelpingscience.com/studies/history/";
    },
    extensions: [{
        type: chsRecord.TrialRecordExtension
    }]
});

let timeline = [];

var preload = {
    type: jsPsychPreload,
    auto_preload: true
}

timeline.push(preload)

timeline.push({
    type: jsPsychFullscreen,
    fullscreen_mode: true
});

const welcome = {
    type: jsPsychHtmlKeyboardResponse,
    stimulus: `
    <div style="max-width: 700px; margin: 35 px auto 0 auto; text-align: left;">
      <h1 style="text-align: center; color: #333;">Welcome to the  Study!</h1>
      <p style="font-size: 18px; line-height: 1.5;">
        Welcome to the "What's Going on Here?" study! First, because this is an online study, we will check to make sure that your webcam is set up and working properly, so we can record your baby’s looking behavior during the study.
      </p>
      <p style="font-size: 18px; line-height: 1.5;">
        Following that page, you will be given an opportunity to review the consent information and we will ask that you record a short video of yourself giving consent to participate in this study. 
        </p>
        <p> After you are finished with the consent page, you will be provided with more detailed information about what to do during the study and how to get started. Please make sure you complete this study on a laptop or computer, not a digital device. </p>
      <p style="font-size: 18px; text-align: center;">
        Press the <strong>space bar</strong> to continue.
      </p>
    </div>
  `,
    choices: [' '],
    trial_duration: null
};

timeline.push(welcome);

const videoConfig = {
    type: chsRecord.VideoConfigPlugin,
};
timeline.push(videoConfig);

const video_consent = {
    type: chsRecord.VideoConsentPlugin,
    PIName: "Sandy LaTourrette",
    institution: "University of Southern California (USC)",
    PIContact: "Sandy LaTourrette (contact: (970) 685-2574)",
    payment: "You and your child are not expected to get any personal benefit from being in this research study. Your child's participation could help us better understand how children learn language and how we as a society might improve the teaching of language. As a thank you for your involvement, you will receive a $5 Amazon gift card via email. To be eligible for the gift card, your child must be in the age range for the study, you need to submit a valid consent statement, and we need to see that there is a child with you during the consent video at the start of the study. However, we will send a gift card even if you do not finish the whole study or if we are not able to use your child's data.",
    procedures: "If you decide to take part, this is what will happen: First, you (the parent) will record a video verbally consenting to the study. For the remainder of the study, all phases will be recorded by your webcam. Participants will see a series of images or videos presented on a screen. These visual displays may or may not be accompanied by a short description of the image or video in English. Before the tasks begin, you (the parent) may be asked to turn away from the screen so that you cannot unintentionally influence your child’s behavior – unless your assistance will be needed in the game. Your child may be prompted to point, look, or give a verbal response to questions. Please do not pause the video; however, if your child is no longer attending to the screen or wants to stop, you can exit the study at any time. Following the tasks, you will be asked to fill out a short form about your experience in the study, whether there is any reason your data might be compromised, and some basic demographic information. You may also be asked to fill out relevant questionnaires on your child’s vocabulary or language background. After the experiment and completion of the tasks, you will be briefly told about the background and goals of this study through written text or a prerecorded video. In some cases, your child may be assigned to a certain study group. This group will be determined randomly, like flipping a coin or pulling a number from a hat. Different groups might hear different speakers, different words, or see different images.",
    purpose: "The purpose of this study is to understand the way in which humans learn to understand language and infer the meanings of new words. In particular, we are interested in how children use and integrate different kinds of information to guess a new word’s meaning, including the visual referents present when they hear the word and the social and linguistic context in which the word is uttered. Because of the nature of this study, specific hypotheses and predictions cannot be divulged until after the experiment, at which time a detailed debriefing will be provided.",
    datause: "We will keep your records for this study confidential as far as permitted by law.  However, if we are required to do so by law, we will disclose confidential information about you. Efforts will be made to limit the use and disclosure of your personal information, including research studies and medical records, to people who are required to review this information. We may publish the information from this study in journals or present it at meetings. If we do, we will not use your name. The University of Southern California’s Institutional Review Board (IRB) and Human Research Protection Program (HRPP) may review your records. Organizations that may also inspect and copy your information include Children Helping Science/Lookit. During the study session, you and your child will be recorded via your computer's webcam and microphone. Video recordings and other data you enter are sent securely to Lookit and shared with our lab. At the end of the session, you will be prompted to choose a privacy level for your webcam recordings. You will have the option to withdraw your video data at this point. If you withdraw consent, your data will be deleted by Lookit. If you agree to your video’s use, then your data will be stored securely on Lookit, OSF database servers, and USC CHILD Lab computers accessible only to researchers from the USC CHILD Lab. However, it is important to note that there is always a small risk that data transmitted over the internet may be intercepted or that the security of stored data may be compromised. No video clips will be published or shared unless you allow this when selecting a privacy level. If we do not receive a consent recording (the video you'll make at the start) for this session and cannot verify that you agreed to participate, no other video from your session will be viewed. The investigators are required to report certain cases with the potential of serious harm to you, or others, such as suicidality or child abuse, to the appropriate authorities. Your data will be maintained confidentially and may be shared with other researchers. The research may be about similar or unrelated topics to this study. Our goal is to make more research possible. We plan to keep your data and/or specimens indefinitely. If shared, data will be transferred securely. If you are not comfortable with this, you should not participate in this study. The investigators are required to report certain cases with the potential of serious harm to you, or others, such as suicidality or child abuse, to the appropriate authorities.",
    additional_video_privacy_statement: "",
    research_rights_statement: "If you have any questions about your rights as a human research participant at any time before, during or after participation, please contact the Institutional Review Board (IRB) at (323) 442-0114 for assistance",
    risk_statement: "Possible risks and discomforts you could experience during this study include: 1) Children may become bored and restless during the experiment. 2) Breach of Confidentiality: there is a small risk that people not connected with the study will learn your identity or personal information. There is a small risk that people who are not connected with this study will learn your identity or your personal information",
    voluntary_participation: "It is your choice whether to participate. If you choose to participate, you may change your mind and leave the study at any time. If you decide not to participate, or choose to end your participation in this study, you will not be penalized or lose any benefits that you are otherwise entitled to. If you and/or your child choose to participate, it's okay to stop at any point during the session. Please do pause or stop the session if your child becomes very fussy or does not want to participate. At the end of the session, you will be prompted to choose a privacy level for your webcam recordings. You will have the option to withdraw your video data at this point. If you withdraw consent, your data will be deleted by Lookit. To withdraw, simply click the X on your browser to exit the tab. At the end of the study, after video recording has completed, you will also have the option of withdrawing from the study, in which case all videos except your consent video will be deleted. An alternative would be not to participate in this study"
};

timeline.push(video_consent);


// Creating the HTML for the first instruction bullet point list
const bullet_list_html1 = `
  <div style="max-width: 700px; margin: 30px auto 0 auto; text-align: left;">
    <h2 style="text-align: center; margin-top: 0;">Experiment Instructions</h2>

    <p style="font-size: 18px;"><strong>Parent's Role:</strong></p>
    <ul style="font-size: 17px; line-height: 1.5; padding-left: 20px;">
      <li>Parents, your child will see several images and hear both familiar and unfamiliar words. We will ask your child to look and/or point to the object they think is correct.</li>
      <li>Your role is to sit back and make sure your child doesn't leave. You will not need to press any buttons during the actual study until the study has concluded, unless you need to exit.</li>
      <li>If you notice that your child is becoming bored or too fussy to finish the study, that is perfectly OK and quite common. You can discontinue their participation.</li>
          </ul>

      
    <p style="font-size: 18px;"><strong>How to Exit:</strong></p>
    <ul style="font-size: 17px; line-height: 1.5; padding-left: 20px;">
      <li>IMPORTANT: If you need to end the study early, you can press the "esc" button and will be prompted to exit. <strong>Please exit only by pressing the "esc" button, as simply exiting out of the study webpage will not save your data and we will lose your information.</strong> </li>
      <li>Even if you end the study early we can still use the data from the parts that your child was looking. You and your child don’t need to finish the study for your data to be usable. </li>
    </ul>


    <p style="font-size: 16px; text-align: center;">
      Now, get your child ready to go! When you and your child are ready to start, please press the <strong>space bar</strong> to begin
    </p>
  </div>
`;
// Define the trial using the html-keyboard-response plugin
const instructions1 = {
    type: jsPsychHtmlKeyboardResponse,
    stimulus: bullet_list_html1,
    choices: [' '], // Allows the user to press the spacebar to continue
};

timeline.push(instructions1)




// Helper function: group array of objects by key
function groupBy(arr, key) {
    return arr.reduce((acc, obj) => {
        (acc[obj[key]] = acc[obj[key]] || []).push(obj);
        return acc;
    }, {});
}

const startRec = {
    type: chsRecord.StartRecordPlugin
};

function exitProof(trial) {
    const orig_on_finish = trial.on_finish;

    trial.choices = ['Escape'];

    trial.on_finish = function(data) {
        if (data.response === 'Escape') {
            // stop and save recording, then show message
            const stopRec = {
                type: chsRecord.StopRecordPlugin
            };

            const messageTrial = {
                type: jsPsychHtmlKeyboardResponse,
                stimulus: "Your recording is saved. You may close this page now.",
                choices: [] // no keys, trial just sits until participant closes page
            };

            // Run both in order
            jsPsych.run([stopRec, messageTrial]);
        }

        if (typeof orig_on_finish === "function") {
            orig_on_finish(data);
        }
    };

    return trial;
}


const black_before_flash = {
    type: jsPsychHtmlKeyboardResponse,
    stimulus: '',
    choices: "NO_KEYS",
    trial_duration: 200, 
    on_load: function() {
        document.body.style.backgroundColor = 'black';
    },
    on_finish: function() {
        document.body.style.backgroundColor = '';
    }
};


const white_flash = {
    type: jsPsychHtmlKeyboardResponse,
    stimulus: '',
    choices: "NO_KEYS",
    trial_duration: 100, 
    on_load: function() {
        document.body.style.backgroundColor = 'white';
    },
    on_finish: function() {
        document.body.style.backgroundColor = '';
    }
};

const black_after_flash = {
    type: jsPsychHtmlKeyboardResponse,
    stimulus: '',
    choices: "NO_KEYS",
    trial_duration: 200, 
    on_load: function() {
        document.body.style.backgroundColor = 'black';
    },
    on_finish: function() {
        document.body.style.backgroundColor = '';
    }
};


/* define familiarization trials */
var hello_boy = exitProof({
    type: jsPsychHtmlKeyboardResponse,
    stimulus: `
    <img src="${baseImage}intro_boy.gif" width="700">
    <audio autoplay>
      <source src="${baseAudio}intro_boy.mp3" type="audio/mp3">
    </audio>
  `,
    trial_duration: 5000
});

var hello_girl = exitProof({
    type: jsPsychHtmlKeyboardResponse,
    stimulus: `
    <img src="${baseImage}intro_girl.gif" width="700">
    <audio autoplay>
      <source src="${baseAudio}intro_girl.mp3" type="audio/mp3">
    </audio>
  `,
    trial_duration: 5000
});

var hello_both = exitProof({
    type: jsPsychHtmlKeyboardResponse,
    stimulus: `
    <div style="display: flex; justify-content: center; gap: 100px;">
      <img src="${baseImage}intro_girl.gif" width="576" height="350">
      <img src="${baseImage}intro_boy.gif" width="576" height="350">
    </div>
    <audio autoplay>
      <source src="${baseAudio}intro_both.mp3" type="audio/mp3">
    </audio>
  `,
    trial_duration: 6000
});

timeline.push(startRec, black_before_flash, white_flash, black_after_flash, hello_boy, hello_girl, hello_both);

var look_carrying = exitProof({
    type: jsPsychHtmlKeyboardResponse,
    stimulus: `
    <img src="${baseImage}carrying.gif" width="750">
    <audio autoplay>
      <source src="${baseAudio}look_carrying.mp3" type="audio/mp3">
    </audio>
  `,
    trial_duration: 8000
});

var pig = exitProof({
    type: jsPsychHtmlKeyboardResponse,
    stimulus: `
    <div style="display: flex; justify-content: center; gap: 290px;">
      <img src="${baseImage}pig.png" width="400" height="350">
      <img src="${baseImage}key.png" width="400" height="400">
      <audio autoplay>
        <source src="${baseAudio}find_pig.mp3" type="audio/mp3">
      </audio>
    </div>
  `,
    trial_duration: 8000
});

var key = exitProof({
    type: jsPsychHtmlKeyboardResponse,
    stimulus: `
    <div style="display: flex; justify-content: center; gap: 290px;">
      <img src="${baseImage}pig.png" width="400" height="350">
      <img src="${baseImage}key.png" width="400" height="400">
      <audio autoplay>
        <source src="${baseAudio}find_key.mp3" type="audio/mp3">
      </audio>
    </div>
  `,
    trial_duration: 8000
});

var find_carrying = exitProof({
    type: jsPsychHtmlKeyboardResponse,
    stimulus: `
    <div style="display: flex; justify-content: center; gap: 100px;">
      <img src="${baseImage}clapping.gif" width="576" height="350">
      <img src="${baseImage}carrying.gif" width="576" height="350">
      <audio autoplay>
        <source src="${baseAudio}find_carrying.mp3" type="audio/mp3">
      </audio>
    </div>
  `,
    trial_duration: 8000
});

timeline.push(look_carrying, pig, look_carrying, key, find_carrying);

// Load JSON and setup trials
fetch(json_url)
    .then(response => response.json())
    .then(data => {

            // Group rows by block (Group column)
            const blocks = groupBy(data, 'Group');
            const block_keys = Object.keys(blocks);

            // Choose one random block for participant
            const chosen_block_key = block_keys[Math.floor(Math.random() * block_keys.length)];
            const chosen_block = blocks[chosen_block_key];

            // Build trials according to Phase column
            const trials = chosen_block.map(row => {

                if (row.Phase === "Exposure") {
                    return exitProof({
                        type: jsPsychHtmlKeyboardResponse,
                        stimulus: `
            <div>
              <img src="${baseImage + row.Picture}" width="750"><br>
              <audio autoplay>
                <source src="${baseAudio + row.Audio_name}" type="audio/mp3">
              </audio>
            </div>
          `,
                        trial_duration: 12000,
                        data: {
                            phase: 'Exposure',
                            trial_info: row
                        }
                    });
                } else if (row.Phase === "Filler") {
                    return exitProof({
                        type: jsPsychHtmlKeyboardResponse,
                        stimulus: `
            <div style="display: flex; justify-content: center; gap: 290px;">
              <img src="${baseImage + row.Gif1}"  width="400" height="400">
              <img src="${baseImage + row.Gif2}"  width="400" height="400">
            </div>
            <audio autoplay>
              <source src="${baseAudio + row.Audio_name}" type="audio/mp3">
            </audio>
          `,
                        trial_duration: 8000,
                        data: {
                            phase: 'Filler',
                            trial_info: row
                        }
                    });
                } else if (row.Phase === "Test") {
                    return exitProof({
                        type: jsPsychHtmlKeyboardResponse,
                        stimulus: `
            <div style="display: flex; justify-content: center; gap: 100px;">
              <img src="${baseImage + row.Gif1}" width="576" height="350">
              <img src="${baseImage + row.Gif2}" width="576" height="350">
            </div>
            <audio autoplay>
              <source src="${baseAudio + row.Audio_name}" type="audio/mp3">
            </audio>
          `,
                        data: {
                            phase: 'Test',
                            trial_info: row
                        },
                        trial_duration: 10000
                    });
                } else {
                    console.warn("Unknown Phase for trial", row);
                    return exitProof({
                        type: jsPsychHtmlKeyboardResponse,
                        stimulus: "Unknown trial type",
                        trial_duration: 1000,
                        data: {
                            phase: 'Unknown',
                            trial_info: row
                        }
                    });
                }
            });

            // Append trials to timeline
            timeline.push(...trials);

            const stopRec = {
                type: chsRecord.StopRecordPlugin
            };

            // Goodbye trial
            const goodbye = {
                type: jsPsychHtmlKeyboardResponse,
                stimulus: `
                  <h1 style="text-align: center; color: #333;">Thank you for Participating!</h1>
    <div style="max-width: 700px; margin: 30px auto 0 auto; font-size: 17px; line-height: 1.6; text-align: left;">
      Thanks for taking the time to support language development research. Our study looks at how children use context clues to learn new verbs. Participants heard sentences that described either causative (ex. the boy pims the girl) or non-causative (ex. the boy and the girl pim together) with video clips that either matched or did not match the nature of the sentences. This study will help us better understand how children understand new verbs by using the information given to them, especially when the information they hear and see may be in conflict with eachother.

      <br><br>

      If you want to learn more about research in child language development, you are more than welcome to check out our lab website:
      <a href='https://dornsife.usc.edu/childlab/' target='_blank' rel='noopener'>The Child Learning and Development Lab</a>!

      <br><br>

      To thank you for your participation, we'll be emailing you a $5 Amazon gift card — this should arrive in your inbox within the next 1 to 2 weeks after we confirm your consent video and check that your child is in the age range for this study. (If you don't hear from us by then, feel free to reach out!) If you participate again with another child in the age range, you'll receive one gift card per child.

      <br><br>

      Don't worry if you noticed that your child wasn't paying attention on certain trials — There are many reasons a child might behave in a particular way on any given trial (e.g., excitement about a particular option, distraction, out of attention span...), that’s why we average over lots of trials from many kids. Your participation will still be successful and your compensation will not be affected by this.
      
      <br><br>
      
      You may now exit by pressing the space bar or exiting out of this page.
   
    </div>
    

  `
            };


            timeline.push(black_before_flash, white_flash, black_after_flash, stopRec, goodbye);


        // Start the experiment
        jsPsych.run(timeline);
    });