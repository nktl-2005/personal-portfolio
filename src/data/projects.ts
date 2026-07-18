// ---------------------------------------------------------------------------
// Project case studies — every project page, preview, and filter is generated
// from this file. See README.md ("Adding a new project") for the workflow.
//
// Ground rules for editing:
//   - Text in [square brackets] renders as a visible "replace me" placeholder.
//     Fill placeholders with real information; never leave invented details.
//   - `figure` picks one of the built-in line illustrations (see
//     components/ProjectFigure.tsx). To use a real photo or CAD render
//     instead, drop the file in /public/images and set `image` (+ imageAlt).
//   - `featured: true` puts the project in "Selected work" on the home page.
//   - Filters on the Projects page are derived automatically from categories
//     with at least two projects.
// ---------------------------------------------------------------------------

import type { Project } from './types'

export const projects: Project[] = [
  {
    "slug": "electronic-nose-cfd",
    "title": "CFD Study of Nasal-Cavity Geometries for a Universal Adaptive Electronic Nose",
    "summary": "CFD simulations across nasal-cavity geometries to quantify how anatomy shapes airflow, mass transport, and odor detection.",
    "category": "Sensing & Simulation",
    "year": "2026",
    "featured": true,
    "outcome": "Built a reproducible COMSOL-to-Python pipeline linking nasal anatomy to airflow and mass-transfer metrics; study ongoing.",
    "role": "Research Intern",
    "team": "Aizenberg Lab, Harvard University (Cambridge, MA)",
    "duration": "May 2026 - Present",
    "tools": [
      "COMSOL Multiphysics",
      "Python",
      "Pandas",
      "NumPy",
      "Matplotlib"
    ],
    "figure": "enose",
    "overview": "The Aizenberg Lab is developing a universal adaptive electronic nose, a sensor system meant to detect and discriminate odors across varied conditions. In biological noses, nasal-cavity geometry helps govern how air and odorant molecules move toward olfactory receptors. I ran CFD simulations in COMSOL Multiphysics across multiple nasal-cavity geometries to quantify how anatomy affects airflow, mass transport, and odor detection. To keep comparisons reproducible across large datasets, I built automated Python pipelines that extract airflow and mass-transfer metrics from raw simulation output. The results inform how geometry should be handled in the artificial system. The study is ongoing; [Add current headline finding].",
    "problem": {
      "statement": "Odor detection in a biological nose depends on nasal-cavity anatomy, which shapes airflow and carries odorant molecules to olfactory receptors. To design a universal adaptive electronic nose, the Aizenberg Lab needed to understand how geometry drives airflow and mass transport across the range of anatomy the device must generalize to.",
      "limitations": "Nasal-cavity anatomy varies between individuals, so no single geometry represents the design space. Internal airflow and odorant transport are impractical to measure directly inside physical anatomy. [Add specific measurement or data-availability constraints].",
      "requirements": "Simulate airflow, mass transport, and odor detection across multiple nasal-cavity geometries; extract comparable airflow and mass-transfer metrics from each; and keep the analysis reproducible as datasets grow and geometries are added. [Add quantitative accuracy or breathing-condition targets].",
      "difficulty": "Coupling airflow with odorant mass transport across geometrically distinct 3D cavities is computationally demanding, and each run produces large field datasets that must be reduced to a few comparable metrics without manual, error-prone post-processing."
    },
    "specs": [
      {
        "parameter": "Simulation software",
        "value": "COMSOL Multiphysics"
      },
      {
        "parameter": "Physics quantified",
        "value": "Airflow, mass transport, odor detection"
      },
      {
        "parameter": "Geometries analyzed",
        "value": "Multiple nasal-cavity geometries [Add count]"
      },
      {
        "parameter": "Post-processing",
        "value": "Automated Python (Pandas, NumPy) pipeline"
      },
      {
        "parameter": "Inlet / breathing condition",
        "value": "[Add flow rate and boundary conditions]"
      },
      {
        "parameter": "Mesh resolution",
        "value": "[Add mesh element count]"
      }
    ],
    "process": [
      {
        "title": "Assembling the set of nasal-cavity geometries",
        "body": "I worked with multiple nasal-cavity geometries so the study would capture anatomical variation rather than a single case. [Add geometry source, e.g. segmented scans or parametric models.] Establishing a consistent set of geometries up front mattered so that later airflow and mass-transfer comparisons would reflect anatomy, not differences in how each model was built."
      },
      {
        "title": "Building the coupled CFD models in COMSOL",
        "body": "In COMSOL Multiphysics, I set up simulations that couple airflow with odorant mass transport through each cavity. This captures how geometry drives flow and how that flow carries odorant molecules toward detection sites. [Add physics interfaces and boundary conditions used.] The coupling is the point: airflow and mass transport together determine where and how strongly an odor is detected."
      },
      {
        "title": "Running simulations across geometries",
        "body": "I ran the coupled simulations across the full set of geometries, applying the same physics to each so the outputs would be directly comparable. [Add solver settings and number of runs.] Every run produced large volumes of field data, flow and concentration fields throughout the cavity, that had to be reduced systematically before any cross-geometry comparison was possible."
      },
      {
        "title": "Automating post-processing in Python",
        "body": "To turn raw output into comparable numbers, I built automated Python pipelines using Pandas and NumPy. They extract airflow and mass-transfer metrics from each dataset and organize them for direct comparison across geometries. Automation replaced manual post-processing, making the analysis reproducible and letting it scale as geometries were added, necessary given the size of the CFD datasets."
      },
      {
        "title": "Comparing geometries and visualizing metrics",
        "body": "With metrics extracted, I compared airflow and mass-transfer behavior across geometries and used Matplotlib to visualize how anatomical differences track with odor detection. [Add comparison findings.] The aim is to translate these relationships into design guidance for the universal adaptive electronic nose, informing how its channels and sensing are laid out."
      }
    ],
    "decisions": [
      {
        "title": "Model airflow and odorant transport as coupled physics",
        "alternatives": "[Add alternatives considered]",
        "chosen": "Coupled airflow and mass-transport simulation in COMSOL Multiphysics.",
        "reasoning": "Odor detection depends on both how air flows through the cavity and how odorant molecules are carried within that flow. Modeling the two together captures their interaction directly, which a flow-only model would miss.",
        "tradeoffs": "Coupled multiphysics is more computationally demanding per run. [Add observed runtime or convergence tradeoffs]."
      },
      {
        "title": "Automate dataset processing with a Python pipeline",
        "alternatives": "[Add alternatives considered]",
        "chosen": "Automated Python (Pandas, NumPy) pipeline extracting metrics from raw CFD output.",
        "reasoning": "The study spans multiple geometries and large datasets, with more geometries likely to be added. Scripting the extraction makes every comparison reproducible and removes manual post-processing as a source of error and delay.",
        "tradeoffs": "Upfront pipeline development before any results could be compared. [Add maintenance or generalization tradeoffs]."
      },
      {
        "title": "Simulate multiple geometries rather than one representative case",
        "alternatives": "[Add alternatives considered]",
        "chosen": "A set of multiple nasal-cavity geometries analyzed under identical physics.",
        "reasoning": "A universal electronic nose must generalize across anatomy, so the study had to capture variation between geometries rather than optimize around one. Holding the physics constant isolates the effect of geometry itself.",
        "tradeoffs": "More simulations to run and more data to manage than a single-geometry study. [Add tradeoffs]."
      }
    ],
    "solution": {
      "description": "A COMSOL-to-Python workflow that simulates coupled airflow and odorant mass transport across multiple nasal-cavity geometries and reduces the results to comparable metrics, in support of designing a universal adaptive electronic nose.",
      "components": [
        "Coupled airflow and mass-transport CFD models in COMSOL Multiphysics",
        "A set of multiple nasal-cavity geometries analyzed under identical physics",
        "Automated Python (Pandas, NumPy) pipeline for extracting airflow and mass-transfer metrics",
        "Matplotlib visualizations for cross-geometry comparison",
        "[Add: mapping from CFD metrics to electronic-nose design parameters]"
      ],
      "operation": "Each geometry is simulated in COMSOL with coupled airflow and mass transport. Raw field output is passed to the Python pipeline, which extracts airflow and mass-transfer metrics and structures them for comparison. Metrics are visualized across geometries to show how anatomy affects odor detection, which then informs the electronic nose design. [Add how results feed specific design decisions]."
    },
    "results": [
      {
        "metric": "Airflow metrics across geometries",
        "value": "[Add measured result]",
        "note": "Quantified per geometry via the pipeline; results not yet published"
      },
      {
        "metric": "Mass transport / odor detection",
        "value": "[Add measured result]",
        "note": "Cross-geometry comparison ongoing"
      },
      {
        "metric": "Analysis reproducibility",
        "value": "Automated Python pipeline",
        "note": "Reproducible metric extraction across large CFD datasets and added geometries"
      }
    ],
    "reflection": {
      "worked": "Building the automated Python pipeline early paid off: it made comparisons across geometries reproducible and absorbed the large CFD datasets without manual post-processing. Coupling airflow and mass transport in COMSOL kept the model faithful to how odor detection actually depends on both flow and transport.",
      "didnt": "[Add what didn't work or what you would change]",
      "learned": "Reducing large multiphysics datasets to a few comparable, meaningful metrics is as much of the work as running the simulations. Scripting that reduction up front, rather than post-processing by hand, is what makes a multi-geometry study tractable and reproducible.",
      "next": "Extend the comparison to additional geometries and translate the airflow and mass-transfer findings into concrete design parameters for the universal adaptive electronic nose. [Add specific next milestones]."
    }
  },
  {
    "slug": "methane-sensor-validation",
    "title": "Field Validation of Low-Cost Methane Sensors",
    "summary": "Field-validated novel low-cost methane sensors at UC Davis, benchmarking output against industry-standard reference instruments.",
    "category": "Sensing & Simulation",
    "year": "2026",
    "featured": false,
    "outcome": "A UC Davis field study confirmed the real-world accuracy of novel low-cost methane sensors against industry-standard reference instruments.",
    "role": "Research Intern",
    "team": "Aizenberg Lab, Harvard University — field study conducted with UC Davis",
    "duration": "2026 (within May 2026 – present internship)",
    "tools": [
      "Low-cost methane sensors (device under test)",
      "Industry-standard reference instruments",
      "Field deployment at UC Davis",
      "Sensor-vs-reference benchmarking",
      "[Add data analysis software]"
    ],
    "figure": "methane",
    "overview": "As a research intern in the Aizenberg Lab at Harvard University, I validated novel low-cost methane sensors in a field study conducted with UC Davis. A low-cost sensor only matters if its readings can be trusted outside controlled conditions, so the study set out to confirm real-world accuracy directly. I benchmarked the sensors' output against industry-standard reference instruments and evaluated how closely the low-cost devices tracked the reference measurements in the field. The study validated the sensors under real operating conditions. Quantitative accuracy and detection figures are not yet public — [Add measured accuracy and detection results]. [Add sensor technology background and broader motivation for low-cost methane sensing.]",
    "problem": {
      "statement": "Determine whether novel low-cost methane sensors report accurate measurements under real field conditions — not just in the lab — by operating them in a UC Davis field study and benchmarking their output against industry-standard reference instruments.",
      "limitations": "Specific constraints of the campaign are not public here: [Add site, environmental, and logistical constraints]. One structural limitation is inherent to the method: accuracy could only be established relative to the reference instruments chosen as ground truth, so the validation claim is bounded by their performance.",
      "requirements": "Operate the low-cost sensors in a real field environment; benchmark their output against industry-standard reference instruments; produce evidence sufficient to confirm real-world accuracy. [Add quantitative accuracy and detection targets.]",
      "difficulty": "Field validation needs credible ground truth. The low-cost sensors' readings mean nothing in isolation — every accuracy claim had to be anchored to industry-standard instruments measuring the same conditions, and the comparison had to hold up under uncontrolled real-world variability rather than a scripted lab test. [Add specific field challenges encountered.]"
    },
    "specs": [
      {
        "parameter": "Device under test",
        "value": "Novel low-cost methane sensors"
      },
      {
        "parameter": "Ground truth",
        "value": "Industry-standard reference instruments [Add make/model]"
      },
      {
        "parameter": "Field site",
        "value": "UC Davis"
      },
      {
        "parameter": "Target gas",
        "value": "Methane"
      },
      {
        "parameter": "Campaign duration",
        "value": "[Add campaign duration]"
      },
      {
        "parameter": "Measured accuracy",
        "value": "[Add measured accuracy vs. reference]"
      }
    ],
    "process": [
      {
        "title": "Framing the validation question",
        "body": "I joined the Aizenberg Lab at Harvard as a research intern in May 2026 and took on field validation of novel low-cost methane sensors. Lab performance alone cannot establish that a sensor's readings hold in the real world, so the study was structured to answer that question directly: operate the sensors in the field and benchmark them against industry-standard reference instruments. [Add sensor technology background and quantitative validation targets.]"
      },
      {
        "title": "Field study with UC Davis",
        "body": "The team conducted the field study with UC Davis. The low-cost sensors operated under real field conditions while industry-standard reference instruments provided ground-truth methane measurements for comparison. This is what separates a validation from a demo — the sensors faced conditions no lab bench reproduces. [Add deployment specifics: sensor count, siting and co-location arrangement, sampling configuration, environmental conditions, and campaign duration.]"
      },
      {
        "title": "Benchmarking against reference instruments",
        "body": "I benchmarked the low-cost sensors' output against the reference instruments' measurements to quantify how faithfully the sensors tracked real methane levels. This comparison carries the entire study: the sensors' credibility rests on demonstrated agreement with instruments the industry already accepts, not on their own uncorroborated readings. [Add comparison methodology: agreement metrics, averaging intervals, and data-quality handling.]"
      },
      {
        "title": "Confirming real-world accuracy",
        "body": "The benchmarking confirmed the sensors' real-world accuracy — the field study validated the novel low-cost sensors against industry-standard references. Quantitative agreement and detection figures are not yet public: [Add measured accuracy, bias, and detection results]. The internship runs May 2026 to present, and this validation is part of that ongoing work. [Add follow-on work: further deployments, sensor iteration, or publication.]"
      }
    ],
    "decisions": [
      {
        "title": "Validate in the field, not only the lab",
        "alternatives": "[Add alternatives considered]",
        "chosen": "A field study conducted with UC Davis, with the sensors operating under real-world conditions.",
        "reasoning": "The claim that mattered was real-world accuracy, and only field data can support it. Controlled lab results cannot answer whether a sensor's readings hold under deployment conditions; the field study answers that question directly.",
        "tradeoffs": "Field campaigns trade experimental control for realism — conditions can be measured but not dictated. [Add the specific logistical and scheduling tradeoffs of the UC Davis campaign.]"
      },
      {
        "title": "Industry-standard reference instruments as ground truth",
        "alternatives": "[Add alternatives considered]",
        "chosen": "Benchmarking every sensor output against industry-standard reference instruments.",
        "reasoning": "For a novel low-cost sensor, credibility is the deliverable. Agreement with instruments the industry already trusts makes the validation result defensible to outside audiences rather than merely internally consistent.",
        "tradeoffs": "The accuracy claim is bounded by the reference instruments' own performance, and the study depends on their availability in the field. [Add reference instrument model and coverage details.]"
      }
    ],
    "solution": {
      "description": "The deliverable is a validation result: field evidence that novel low-cost methane sensors report accurate measurements in the real world. The study's architecture is a direct comparison — the low-cost sensors and industry-standard reference instruments measure methane in the same UC Davis field study, and sensor output is benchmarked against the reference record.",
      "components": [
        "Novel low-cost methane sensors — the devices under test. [Add sensor technology details.]",
        "Industry-standard reference instruments — the ground truth every accuracy claim is anchored to. [Add instrument make and model.]",
        "UC Davis field study — the real-world deployment context. [Add site, conditions, and duration.]",
        "Benchmarking analysis — sensor output evaluated against reference measurements. [Add metrics and software used.]"
      ],
      "operation": "During the campaign, the low-cost sensors and the reference instruments both measure methane under real field conditions. I benchmarked the sensor output against the reference record: agreement confirms real-world accuracy, and any divergence quantifies the sensors' field error. [Add sampling configuration, data pipeline, and analysis workflow.]"
    },
    "results": [
      {
        "metric": "Accuracy vs. reference instruments",
        "value": "[Add measured agreement result]",
        "note": "The field study confirmed real-world accuracy; quantitative figures are not yet public"
      },
      {
        "metric": "Detection performance",
        "value": "[Add detection limit / range result]",
        "note": "Relative to industry-standard reference instruments"
      },
      {
        "metric": "Deployment scale and duration",
        "value": "[Add sensor count and campaign length]"
      }
    ],
    "reflection": {
      "worked": "Anchoring every claim to industry-standard reference instruments. It kept the study honest — the sensors were judged against an external standard, not our expectations — and it makes the result legible to anyone who already trusts those instruments.",
      "didnt": "[Add what proved harder than expected during the field campaign — setbacks, data issues, or logistics.]",
      "learned": "Validation is trust transfer. A novel sensor earns credibility through demonstrated agreement with instruments people already accept, under conditions they actually care about. Accuracy is not a property a device has on a datasheet — it is a claim you assemble evidence for.",
      "next": "The internship is ongoing (May 2026 – present). [Add the next phase: extended deployments, publication of the quantitative results, or sensor iteration informed by the field data.]"
    }
  },
  {
    "slug": "solar-car-ballast-box",
    "title": "Solar Car Ballast Box",
    "summary": "Aluminum sheet-metal ballast enclosure for a competition solar car, FEA-optimized to cut 20% of its weight while meeting braking load cases.",
    "category": "Mechanical Design",
    "year": "2025",
    "featured": true,
    "outcome": "Static FEA-driven optimization cut enclosure weight 20% with structural integrity intact; the assembly is manufactured and entering the chassis.",
    "role": "Mechanical Designer",
    "team": "Midnight Sun Solar Car Team, University of Waterloo",
    "duration": "Sept 2025 – Present",
    "tools": [
      "SolidWorks (sheet metal)",
      "Static FEA",
      "DFM/DFA principles",
      "Aluminum sheet-metal construction"
    ],
    "figure": "ballast",
    "overview": "Midnight Sun's competition solar car must carry ballast: a minimum of 20 kg of steel shot, held so it stays secure and maintains structural integrity through every driving load case, including emergency-braking impact loads. The ballast itself is required mass; the enclosure around it is overhead, so its weight was worth optimizing. As a mechanical designer on the team, I designed the ballast box as an aluminum sheet-metal enclosure in SolidWorks, applying DFM/DFA principles throughout, then used static FEA to optimize the geometry. The result is an enclosure 20% lighter that maintains structural integrity under the required load cases. The design has been validated for manufacturing, a physical assembly has been built, and the box is being integrated into the competition vehicle's chassis.",
    "problem": {
      "statement": "The competition vehicle must carry ballast. The team needed a box that holds at least 20 kg of steel shot and keeps it secure — maintaining structural integrity through all driving load cases, including emergency-braking impact loads — without adding more mass to the car than necessary.",
      "limitations": "Enclosure mass is overhead on top of the mandated 20 kg of ballast, so the structure had to be as light as the load cases allow. Fabrication and assembly practicality constrained the geometry — the design had to follow DFM/DFA principles. [Add chassis packaging envelope, mounting constraints, and budget]",
      "requirements": "Hold a minimum of 20 kg of steel shot. Stay secure and maintain structural integrity under driving load cases, including emergency-braking impact loads. Be manufacturable as an aluminum sheet-metal assembly and integrate into the competition vehicle chassis. [Add regulation reference and specified load-case magnitudes]",
      "difficulty": "The requirements pull against each other: emergency-braking impact loads on 20+ kg of steel shot demand strength and stiffness, while the enclosure's own weight is pure overhead worth minimizing. Resolving that tension required evidence — static FEA — rather than conservative over-building, and every geometry change had to remain manufacturable as sheet metal. [Add load-case magnitudes]"
    },
    "specs": [
      {
        "parameter": "Ballast capacity",
        "value": "20 kg of steel shot, minimum"
      },
      {
        "parameter": "Enclosure material",
        "value": "Aluminum sheet metal [Add alloy, temper, and gauge]"
      },
      {
        "parameter": "Design load cases",
        "value": "Driving load cases incl. emergency-braking impact [Add magnitudes]"
      },
      {
        "parameter": "Enclosure weight reduction",
        "value": "20% via FEA-driven geometry optimization"
      },
      {
        "parameter": "Final enclosure mass",
        "value": "[Add final mass]"
      },
      {
        "parameter": "Overall dimensions",
        "value": "[Add dimensions]"
      }
    ],
    "process": [
      {
        "title": "Requirements and load cases",
        "body": "The competition vehicle must carry ballast, and the box must hold a minimum of 20 kg of steel shot. Beyond capacity, the requirement is retention: the box has to stay secure and maintain structural integrity under driving load cases, including emergency-braking impact loads. I worked from these requirements as the fixed constraints; enclosure weight was the variable to drive down. [Add specified load-case magnitudes and regulation reference]"
      },
      {
        "title": "Sheet-metal design in SolidWorks",
        "body": "I designed the box as an aluminum sheet-metal enclosure in SolidWorks, applying DFM and DFA principles from the first feature. The target was a part that could be fabricated and assembled without difficulty, not just a clean CAD model. [Add the specific DFM/DFA choices — bend strategy, fastening and joining method, part count]"
      },
      {
        "title": "Static FEA and weight optimization",
        "body": "With the enclosure modeled, I ran static FEA under the driving load cases, including the emergency-braking impact condition, and used the results to optimize the geometry. Material stayed where the load paths demanded it and came out where analysis showed margin. Iterating this loop produced an enclosure 20% lighter than where I started, with structural integrity maintained across the load cases. [Add FEA setup: solver, boundary conditions, mesh, and resulting factor of safety]"
      },
      {
        "title": "Manufacturing validation and build",
        "body": "The finished design was validated for manufacturing — the payoff of applying DFM/DFA from the start rather than retrofitting it. A physical assembly has been manufactured from the design, taking the ballast box from SolidWorks model to hardware. [Add fabrication details: who built it, the processes used, and the engineering drawings or tolerance work involved]"
      },
      {
        "title": "Chassis integration",
        "body": "Integration into the competition vehicle chassis is in progress. This is where the securing requirement is proven in context: the box and its mounting must carry the 20 kg of steel shot through the same load cases the analysis covered, including emergency braking. [Add the chassis mounting interface, hardware, and any physical verification planned before competition]"
      }
    ],
    "decisions": [
      {
        "title": "Aluminum sheet metal as the construction method",
        "alternatives": "[Add alternatives considered]",
        "chosen": "An aluminum sheet-metal enclosure, designed in SolidWorks to DFM/DFA principles",
        "reasoning": "Sheet metal gave a closed enclosure for containing loose steel shot and a construction the team could realistically fabricate — DFM/DFA was applied from the start, and the design later passed manufacturing validation. Aluminum kept the enclosure's own mass low, which mattered because every gram of box structure is overhead on top of the mandated ballast.",
        "tradeoffs": "Sheet metal constrains the optimization: geometry changes from the FEA loop had to stay formable and assemblable rather than arbitrary. [Add tradeoffs weighed against other constructions]"
      },
      {
        "title": "Optimizing the geometry with static FEA",
        "alternatives": "[Add alternatives considered]",
        "chosen": "Iterating the enclosure geometry against static FEA results under the defined driving load cases",
        "reasoning": "The design had hard structural requirements — 20 kg of steel shot retained through emergency-braking impact loads — and a direct incentive to shed weight. Static FEA quantified where the structure had margin, so material came out with evidence behind it. The loop ended at a 20% weight reduction with structural integrity maintained.",
        "tradeoffs": "Static analysis covers the defined load cases as modeled. [Add how the emergency-braking impact was represented in a static study and what physical verification will close the loop]"
      }
    ],
    "solution": {
      "description": "The ballast box is an aluminum sheet-metal enclosure that holds a minimum of 20 kg of steel shot inside the competition solar car. Designed in SolidWorks to DFM/DFA principles and optimized with static FEA, the final geometry is 20% lighter while maintaining structural integrity under all defined driving load cases, including emergency-braking impact.",
      "components": [
        "Aluminum sheet-metal enclosure — SolidWorks sheet-metal design, geometry FEA-optimized [Add alloy, gauge, and bend details]",
        "Ballast payload — minimum 20 kg of steel shot",
        "[Add closure and shot-retention method]",
        "[Add chassis mounting interface and fasteners]"
      ],
      "operation": "The box rides in the vehicle chassis carrying the steel shot. Under driving loads — up to and including an emergency-braking impact — the enclosure and its mounting keep the ballast secured and the structure intact. The FEA-optimized geometry delivers that integrity at 20% less enclosure weight; the manufactured assembly is now being integrated into the chassis."
    },
    "results": [
      {
        "metric": "Enclosure weight reduction",
        "value": "20%",
        "note": "Static FEA-driven geometry optimization; structural integrity maintained"
      },
      {
        "metric": "Ballast capacity",
        "value": "20 kg of steel shot, minimum",
        "note": "Competition requirement carried through the design"
      },
      {
        "metric": "Build status",
        "value": "Physical assembly manufactured",
        "note": "Design validated for manufacturing; chassis integration in progress"
      },
      {
        "metric": "Structural margin under emergency-braking load",
        "value": "[Add measured result]",
        "note": "FEA factor of safety or peak stress vs. yield"
      }
    ],
    "reflection": {
      "worked": "Treating manufacturability as a design input. Applying DFM/DFA from the first sheet-metal feature meant the FEA-optimized geometry still passed manufacturing validation and reached a physical assembly.",
      "didnt": "[Add what fell short — e.g., early geometry iterations that failed analysis, or fabrication feedback that forced design changes]",
      "learned": "Static FEA earns its keep as an iteration tool, not a final check — each pass showed where material was carrying load and where it was dead weight, which is how the 20% came out. Designing sheet metal well also means thinking about fabrication and assembly while modeling, not after.",
      "next": "Complete integration into the competition vehicle chassis. [Add planned physical verification of the mounted box under load, and any mass or fit checks against the CAD model]"
    }
  },
  {
    "slug": "vehicle-fixtures",
    "title": "Rapid-Turnaround Solar Car Assembly Fixtures",
    "summary": "Two solar car assembly fixtures: datum-referenced wheel-cover stencils and FDM press-fit camera mounts with hours, not weeks, of lead time.",
    "category": "Mechanical Design",
    "year": "2025",
    "featured": false,
    "outcome": "Stencils referenced to vehicle datums cut wheel-cover installation errors; FDM press-fit mounts cut camera-mount lead time from weeks to hours.",
    "role": "Mechanical Designer",
    "team": "Midnight Sun Solar Car Team",
    "duration": "Sept 2025 – Present",
    "tools": [
      "CAD modeling ([Add software])",
      "FDM 3D printing",
      "Press-fit design",
      "Datum-referenced fixturing",
      "Rapid prototyping"
    ],
    "figure": "fixtures",
    "overview": "Solar car assembly was losing time to two small parts. Wheel covers went on with recurring alignment and installation errors, and camera mounts carried lead times of weeks. As a Mechanical Designer on the Midnight Sun Solar Car Team, I treated both as fixture problems and designed for fast turnaround. I modeled wheel-cover cutting stencils referenced to the vehicle's datum features, so every cut registers to the same geometry that defines the vehicle; assembly accuracy improved and installation errors dropped. I then designed and prototyped a press-fit camera mount system for FDM 3D printing, replacing a weeks-long wait with parts printed in hours. Two small fixtures, one goal: take error and waiting out of assembly.",
    "problem": {
      "statement": "Two recurring drags on solar car assembly: wheel-cover installation suffered alignment and installation errors, and camera mounts carried lead times of weeks.",
      "limitations": "The wheel covers had to be cut and installed accurately relative to the vehicle itself, so any fixture needed a trustworthy physical reference on the car. Camera-mount turnaround was bounded by a process with weeks of lead time, and a replacement approach had to deliver parts in hours. [Add budget, material, and equipment constraints]",
      "requirements": "Stencils: register wheel-cover cut geometry to vehicle datum features and make installation repeatable. Camera mounts: install by press-fit, print on FDM, and turn around in hours rather than weeks. [Add formal tolerances, load cases, and material requirements]",
      "difficulty": "Press-fits are unforgiving of dimensional error, and FDM printing does not hold CAD-nominal dimensions — the two are in tension, so the mount system needed physical prototyping to converge on working fits. The stencils depended on vehicle datum features that could serve as reliable registration. [Add specific challenges encountered]"
    },
    "specs": [
      {
        "parameter": "Camera mount fabrication",
        "value": "FDM 3D printing"
      },
      {
        "parameter": "Camera mount attachment",
        "value": "Press-fit"
      },
      {
        "parameter": "Camera mount lead time",
        "value": "Hours (previously weeks)"
      },
      {
        "parameter": "Stencil reference scheme",
        "value": "Vehicle datum features"
      },
      {
        "parameter": "Mount material",
        "value": "[Add filament material]"
      },
      {
        "parameter": "Press-fit interference",
        "value": "[Add designed interference / tolerance]"
      }
    ],
    "process": [
      {
        "title": "Scope two bottlenecks as one fixtures project",
        "body": "The team was absorbing two recurring costs in assembly. Wheel-cover installation produced alignment and installation errors, and camera mounts carried lead times of weeks. Both are small parts; the pain was in the process around them. I scoped both as a single fixtures effort with a shared goal — accuracy from tooling, turnaround measured in hours — rather than treating each as a one-off part request."
      },
      {
        "title": "Model cutting stencils off vehicle datum features",
        "body": "For the wheel covers, I modeled cutting stencils referenced to the vehicle's datum features. Registering the stencil to the geometry that already controls the vehicle means the cut line lands in the same place every time — position becomes a property of the tool, not of the person installing the cover. [Add stencil material and fabrication method] [Add datum features used for registration]"
      },
      {
        "title": "Design the press-fit camera mount system for FDM",
        "body": "For the camera mounts, I designed a press-fit system intended for FDM 3D printing from the start. Press-fit retention keeps installation simple — the part is retained by interference — and designing around the printer, rather than adapting a design meant for another process, is what makes hour-scale turnaround possible. [Add mount geometry, mating interface, and designed interference values]"
      },
      {
        "title": "Prototype and tune the fits on FDM",
        "body": "I prototyped the mount system on FDM. Printed dimensions deviate from CAD nominals, so press-fit interference is converged on physically: print, check the fit, adjust, reprint. Because each cycle takes hours rather than weeks, that convergence was affordable and could happen the same day. [Add number of prototype iterations and the dimensional adjustments made]"
      },
      {
        "title": "Put both fixtures into assembly",
        "body": "The stencils went into wheel-cover installation, where assembly accuracy improved and installation errors dropped. [Add quantified before/after error data.] The camera mount system cut mount lead time from weeks to hours. Both fixtures stay with the team as reusable tooling — the stencils encode the vehicle's datum references, and the mount design reprints on demand. [Add current usage status]"
      }
    ],
    "decisions": [
      {
        "title": "Reference the stencils to vehicle datum features",
        "alternatives": "[Add alternatives considered]",
        "chosen": "Cutting stencils modeled directly off the vehicle's datum features",
        "reasoning": "The failure mode was alignment error at installation. Referencing the stencil to the datum features that control the vehicle's geometry makes cut position a property of the tool, so the cut lands consistently on every install — which is what the accuracy improvement and error reduction reflect.",
        "tradeoffs": "The stencil is only as accurate as its registration to the datums it references. [Add observed tradeoffs — e.g., datum access during assembly, stencil wear]"
      },
      {
        "title": "Press-fit attachment for the camera mounts",
        "alternatives": "[Add alternatives considered]",
        "chosen": "A press-fit mount system — parts retained by interference, with no additional hardware at install",
        "reasoning": "Press-fit pairs well with fast iteration: a printed prototype gives immediate pass/fail feedback on fit, and a revision is one more print away. With FDM cycles measured in hours, tuning the fit on physical parts was practical.",
        "tradeoffs": "Retention rides on printed dimensions, which FDM does not hold exactly to nominal — the fits had to be proven and tuned on prototypes rather than trusted from CAD. [Add retention/load validation results]"
      },
      {
        "title": "FDM printing for hour-scale turnaround",
        "alternatives": "The previous camera-mount process, which carried lead times of weeks; [Add what that process was and other alternatives considered]",
        "chosen": "Design the mounts for FDM 3D printing and produce them on demand",
        "reasoning": "Lead time was the binding constraint: weeks per mount. FDM turns a design file into an installed part in hours and keeps revisions in the team's hands, which enabled both the lead-time reduction and the press-fit prototyping loop.",
        "tradeoffs": "FDM constrains the design to what the process can hold dimensionally, so fits needed physical iteration rather than working first time from the model. [Add material/strength tradeoffs versus the previous mounts]"
      }
    ],
    "solution": {
      "description": "Two purpose-built fixtures that move accuracy and turnaround into tooling the team controls. The cutting stencils encode the vehicle's datum references so wheel-cover cuts register to the car's controlling geometry. The camera mount system is designed for FDM 3D printing from the outset, so a mount is a print job measured in hours rather than a component with a weeks-long lead time.",
      "components": [
        "Wheel-cover cutting stencils modeled off vehicle datum features",
        "Press-fit camera mount system designed for FDM 3D printing",
        "FDM prototype series used to converge the press-fit dimensions",
        "[Add supporting details — stencil fabrication, mount mating interfaces]"
      ],
      "operation": "In use, a stencil registers against the vehicle's datum features and defines the wheel-cover cut, so the installer cuts to the tool. [Add installation procedure detail.] A camera mount is printed on FDM and pressed into place; when one is damaged or the design revises, the replacement is hours away instead of weeks."
    },
    "results": [
      {
        "metric": "Camera mount lead time",
        "value": "Weeks to hours",
        "note": "Press-fit design plus FDM printing replaced the previous weeks-long process"
      },
      {
        "metric": "Wheel-cover installation errors",
        "value": "[Add measured result]",
        "note": "Errors reduced after the datum-referenced stencils were introduced; add before/after counts or rework rate"
      },
      {
        "metric": "Fixture systems delivered",
        "value": "2",
        "note": "Wheel-cover cutting stencils and the press-fit camera mount system"
      }
    ],
    "reflection": {
      "worked": "Anchoring the stencils to vehicle datum features attacked the alignment errors at their source, and designing the mounts for FDM from the start collapsed lead time from weeks to hours while making fit iteration cheap.",
      "didnt": "Press-fit dimensions did not transfer cleanly from CAD to printed parts — FDM tolerances meant the fits had to be tuned through physical prototypes rather than trusted from the model. [Add specific fit or retention issues encountered]",
      "learned": "Small fixtures pay off out of proportion to their size when they encode a reference instead of relying on operator care, and designing for the fabrication process — FDM tolerances included — is part of the design, not a downstream detail.",
      "next": "Quantify the wheel-cover improvement with before/after installation-error data, and [Add planned next fixtures or design extensions]."
    }
  },
  {
    "slug": "desktop-injection-molder",
    "title": "WAC-A-MOLD Desktop Injection Molder — Clamping Subsystem",
    "summary": "Clamping subsystem for the university's first desktop injection molder — parametric linkages in Onshape, links machined on a mill.",
    "category": "Product Development",
    "year": "2026",
    "featured": true,
    "outcome": "Delivered parametric linkage CAD and milled prototype links for the clamp of the university's first desktop injection molder (in progress).",
    "role": "Mechanical Team Member (founding member); owner of the clamping subsystem",
    "team": "Waterloo Automation Collective",
    "duration": "Jan 2026 – Present",
    "tools": [
      "Onshape",
      "Parametric CAD (variable-driven models)",
      "Linkage design",
      "Milling"
    ],
    "figure": "molder",
    "overview": "WAC-A-MOLD is the Waterloo Automation Collective's desktop injection molder — the first at the university — built to give students accessible injection molding. I am a founding member of the team and own the clamping subsystem: the mechanism that closes the mold and holds it shut while plastic is injected. I drove the subsystem's early-stage design and prototyping. I developed the clamping linkages in Onshape as parametrically driven models, which accelerated design iteration and centralized CAD management for the whole team, and I machined the links on a mill to carry the design into physical hardware. The machine is early-stage and in progress; quantified performance results will follow prototype testing, and this case study will be updated as they land.",
    "problem": {
      "statement": "Students at the university lacked accessible injection molding; WAC-A-MOLD will be the university's first desktop injection molder. Within the machine, the clamping subsystem — my ownership — must close the mold and hold it shut against injection pressure, and it had to be designed while the overall machine was still taking shape.",
      "limitations": "The machine must stay desktop-scale, and the project is early-stage with the architecture still in flux. [Add formal constraints: budget, footprint, safety requirements.]",
      "requirements": "The clamp must close the mold, hold it closed during injection, and release for part removal. Quantified targets are not yet locked: [Add clamping force target, mold size, stroke, and cycle requirements.]",
      "difficulty": "Designing against moving requirements. In an early-stage machine, loads, interfaces, and envelope are all provisional, so the clamp design had to absorb change cheaply — which pushed the CAD toward fully parametric, variable-driven models."
    },
    "specs": [
      {
        "parameter": "Machine format",
        "value": "Desktop injection molder"
      },
      {
        "parameter": "Clamping mechanism",
        "value": "Mechanical linkage"
      },
      {
        "parameter": "CAD platform",
        "value": "Onshape (parametric, shared team workspace)"
      },
      {
        "parameter": "Link fabrication",
        "value": "Milled"
      },
      {
        "parameter": "Target clamping force",
        "value": "[Add target clamping force]"
      },
      {
        "parameter": "Mold size",
        "value": "[Add mold size / daylight]"
      }
    ],
    "process": [
      {
        "title": "Team founding and subsystem ownership",
        "body": "The Waterloo Automation Collective formed in January 2026 to build the university's first desktop injection molder and give students accessible injection molding. I joined as a founding member on the mechanical team and took ownership of the clamping subsystem — the mechanism that closes the mold and holds it shut while plastic is injected. Owning the subsystem meant driving it from first concept through CAD and into prototype hardware."
      },
      {
        "title": "Early-stage clamp design",
        "body": "I drove the early-stage design of the clamp. The concept centers on a mechanical linkage that generates the force to keep the mold closed against injection pressure. Requirements were still settling — [Add clamping force target, mold size, and stroke requirements] — and the rest of the machine was being defined in parallel, so I expected the linkage geometry to change often. That expectation shaped the next step: build CAD that makes change cheap."
      },
      {
        "title": "Parametric linkage CAD in Onshape",
        "body": "I developed the clamping linkages in Onshape as parametrically driven models: geometry is controlled by named variables, so a change to one input updates the whole linkage instead of forcing a remodel. This accelerated design iteration — revisions became edits, not rebuilds — and centralized CAD management for the team, with everyone working from one shared, current model."
      },
      {
        "title": "Machining the links",
        "body": "With the linkage geometry settled enough to fabricate, I machined the links on a mill. [Add material, stock, and key tolerances.] Making the parts myself closed the loop between design and fabrication — decisions made in CAD showed up directly as setups, workholding, and cut time. The milled links took the clamping subsystem from a parametric model to physical prototype hardware the team could evaluate."
      },
      {
        "title": "Iteration and next steps (in progress)",
        "body": "WAC-A-MOLD is an early-stage, in-progress machine, and the clamping subsystem is evolving with it. The parametric model keeps each revision cheap as interfaces to the rest of the machine firm up. Upcoming work: [Add integration plan — assembly, actuation, and clamping force testing]. Final performance numbers do not exist yet; I will publish measured results as prototype testing begins."
      }
    ],
    "decisions": [
      {
        "title": "Parametric, variable-driven CAD from the start",
        "alternatives": "[Add alternatives considered]",
        "chosen": "Model the clamping linkages in Onshape as fully parametric, variable-driven models.",
        "reasoning": "Early-stage design means churn: requirements, interfaces, and geometry all move while the machine is being defined. Parametric models make each change an edit rather than a remodel, which is why this approach accelerated design iteration. Onshape also centralized CAD management, keeping the whole team on one shared, current model.",
        "tradeoffs": "Parametric structure takes more upfront modeling effort before it pays off. [Add specific tradeoffs encountered.]"
      },
      {
        "title": "Linkage-based clamping architecture",
        "alternatives": "[Add alternatives considered]",
        "chosen": "A mechanical linkage generates and holds the clamping force.",
        "reasoning": "The clamp must close the mold and hold it shut against injection pressure on a desktop-scale machine. [Add the specific rationale — force amplification, packaging, cost — that drove the linkage choice over other clamp architectures.]",
        "tradeoffs": "[Add tradeoffs versus other clamping architectures]"
      },
      {
        "title": "Milled links for the first prototype",
        "alternatives": "[Add alternatives considered]",
        "chosen": "Machine the linkage components on a mill.",
        "reasoning": "Milled links carried the parametric CAD into physical hardware during early prototyping, giving the team real parts to evaluate instead of models alone.",
        "tradeoffs": "[Add tradeoffs — e.g., fabrication time per design revision]"
      }
    ],
    "solution": {
      "description": "A linkage-based clamping subsystem for WAC-A-MOLD, developed as a fully parametric Onshape model and carried into hardware with links machined on a mill. It is one subsystem of an early-stage desktop injection molder the Waterloo Automation Collective is building to give students accessible injection molding.",
      "components": [
        "Clamping linkage — parametrically driven Onshape model; my subsystem ownership",
        "Machined links — milled; [Add material and stock]",
        "[Add actuation — how the clamp is driven]",
        "[Add platen and mold interface hardware]",
        "Shared Onshape workspace — centralized CAD management for the team"
      ],
      "operation": "The linkage closes the mold halves and holds them clamped while material is injected, then releases so the part can be removed. [Add the actuation sequence, force path, and lock-up behavior once finalized.] Operating behavior will be characterized when the prototype machine comes online."
    },
    "results": [
      {
        "metric": "Clamping force",
        "value": "[Add measured clamping force]",
        "note": "Not yet tested — machine is early-stage and in progress"
      },
      {
        "metric": "First molded part",
        "value": "[Add first-shot result]",
        "note": "Pending full-machine bring-up"
      },
      {
        "metric": "Clamp linkage hardware",
        "value": "Links machined on a mill",
        "note": "Prototype parts produced from the parametric CAD"
      }
    ],
    "reflection": {
      "worked": "Parametric CAD from day one. Early-stage requirements moved constantly, and variable-driven linkage models turned each change into an edit instead of a remodel — the team iterated faster and worked from one centralized CAD source in Onshape.",
      "didnt": "Nothing is validated yet, which is its own caveat: the machine has not run, so the clamp design rests on models and prototype parts rather than molding cycles. [Add specific setbacks and dead ends as the build progresses.]",
      "learned": "Machining my own links made manufacturability concrete — geometry that is trivial to model still has to be fixtured and cut, and that feedback now shapes how I design. On a founding team, CAD structure is a team-scale decision: parametric discipline early saves everyone rework later.",
      "next": "Integrate the clamp with the rest of the machine, then get to first tests: measure clamping force, confirm the mold stays shut under injection pressure, and iterate the linkage from measured data. [Add concrete milestones.]"
    }
  },
  {
    "slug": "educational-gearboxes",
    "title": "Two-Stage Educational Gearboxes",
    "summary": "Parametric, 3D-printed two-stage gearboxes with DC-motor actuation, built as live demonstration hardware for undergraduate lectures.",
    "category": "Product Development",
    "year": "2026",
    "featured": false,
    "outcome": "Multiple motor-driven gearbox demonstrators now run reliably in undergraduate lectures; parametric CAD reduced gear design cycle time.",
    "role": "Undergraduate Research Assistant",
    "team": "Multi-Scale Additive Manufacturing (MSAM) Lab, University of Waterloo",
    "duration": "Jan – Apr 2026 (4-month term)",
    "tools": [
      "SolidWorks (parametric CAD)",
      "nTop",
      "FDM 3D printing",
      "Metal additive manufacturing",
      "DC motors"
    ],
    "figure": "gearbox",
    "overview": "During a four-month research term at the University of Waterloo's Multi-Scale Additive Manufacturing (MSAM) Lab, I designed and prototyped multiple two-stage gearboxes used as live demonstrations in undergraduate lectures. Each demonstrator is driven by a DC motor, so the gear train actuates automatically during class. I built the CAD as fully parametric SolidWorks models, including a parametrically modeled helical gear; geometry regenerates from design parameters, which made changes rapid and repeatable and reduced gear design cycle time. Because the components are FDM 3D printed, I iterated their designs against the process until the assemblies operated reliably. I also introduced metal additive manufacturing techniques into the gearbox housing, designing it in nTop.",
    "problem": {
      "statement": "Build two-stage gearbox demonstrators for undergraduate lectures: physical assemblies that operate reliably and actuate on their own in front of a class.",
      "limitations": "Components were fabricated by FDM 3D printing, which constrains how parts must be designed before they run reliably. All design, prototyping, and motor integration had to fit a single four-month term (Jan–Apr 2026). [Add other constraints — budget, printer access, materials]",
      "requirements": "Two-stage gear architecture; multiple gearbox variants; reliable operation of FDM-printed assemblies; automated DC-motor actuation for live lecture use; CAD that supports rapid, repeatable design changes. [Add quantitative targets — ratios, speeds, torque]",
      "difficulty": "FDM-printed gear assemblies did not run reliably without rework — components needed iterative redesign around the process. The helical gear also had to be modeled parametrically so each variant regenerates correctly instead of being remodeled by hand, and the housing brought a second, very different process into the assembly: metal additive manufacturing."
    },
    "specs": [
      {
        "parameter": "Gearbox architecture",
        "value": "Two-stage gear train"
      },
      {
        "parameter": "Stage ratios / overall ratio",
        "value": "[Add gear ratios]"
      },
      {
        "parameter": "CAD",
        "value": "Parametric SolidWorks models, incl. parametrically modeled helical gear"
      },
      {
        "parameter": "Component fabrication",
        "value": "FDM 3D printing, design iterated for reliable operation"
      },
      {
        "parameter": "Housing",
        "value": "Incorporates metal additive manufacturing techniques, designed in nTop"
      },
      {
        "parameter": "Actuation",
        "value": "DC motors, automated for live lecture demonstration"
      }
    ],
    "process": [
      {
        "title": "Parametric gearbox models in SolidWorks",
        "body": "I modeled the gearboxes in SolidWorks as fully parametric assemblies rather than fixed geometry. The helical gear in particular was built parametrically, so its tooth geometry regenerates when design parameters change. This paid off across multiple gearbox variants: a design change meant updating parameters and regenerating, not remodeling, which made revisions rapid and repeatable and reduced gear design cycle time."
      },
      {
        "title": "Iterative design for FDM printing",
        "body": "I prototyped the components on FDM 3D printers and iterated the designs against the process. Each print revealed what the process would and wouldn't tolerate, and I revised parts accordingly — [Add the specific DFM changes made, e.g., clearances, tooth profiles, print orientations] — until assembled gearboxes operated reliably. The parametric models kept the loop fast: revise parameters, regenerate, reprint."
      },
      {
        "title": "Metal AM techniques in the housing via nTop",
        "body": "While the rest of the components stayed FDM-printed, the housing carried the metal side of the work: I introduced metal additive manufacturing techniques into the gearbox housing, designing it in nTop. [Add the specific nTop workflows and the metal AM process and material used.] This put two additive processes — FDM and metal AM — into a single teaching assembly."
      },
      {
        "title": "DC motor integration for automated actuation",
        "body": "To make the demonstrations run live during lectures, I integrated DC motors that drive the gear actuation. Each gearbox actuates automatically in front of the class rather than requiring someone to turn it by hand. [Add motor specifications, mounting approach, and drive/power details.] Automated actuation is what turns a printed gear train into a lecture demonstration."
      },
      {
        "title": "Multiple demonstrators for lecture use",
        "body": "Over the Jan–Apr 2026 term I carried multiple two-stage gearbox designs through this loop — parametric CAD, FDM iteration, motor integration — and delivered them as demonstration hardware for undergraduate lectures. [Add the number of units built, the courses they support, and any instructor or student feedback collected.]"
      }
    ],
    "decisions": [
      {
        "title": "Parametric CAD from the start",
        "alternatives": "[Add alternatives considered]",
        "chosen": "Fully parametric SolidWorks models — including a parametrically modeled helical gear — with geometry regenerated from design parameters.",
        "reasoning": "The term required multiple gearbox variants and repeated print-driven revisions. Parametric models make each change a parameter edit and a regeneration rather than a remodel, which suited that pace and reduced gear design cycle time.",
        "tradeoffs": "Parametric setup front-loads modeling effort — a helical gear especially — before it pays back across variants. [Add specific setup costs or model limitations encountered.]"
      },
      {
        "title": "Reliability through FDM-oriented iteration",
        "alternatives": "[Add alternatives considered]",
        "chosen": "Design gearbox components specifically for FDM 3D printing and iterate against real prints until assemblies operated reliably.",
        "reasoning": "The components were produced by FDM, so reliable operation had to be designed in: parts shaped to what the process produces well, verified by printing and running them. The parametric models absorbed each revision quickly, keeping iteration cheap.",
        "tradeoffs": "Reliability came from repeated print-and-revise cycles rather than a first-pass design. [Add iteration counts or representative failure modes.]"
      },
      {
        "title": "Metal AM techniques in the housing, designed in nTop",
        "alternatives": "[Add alternatives considered]",
        "chosen": "Introduce metal additive manufacturing techniques into the gearbox housing, using nTop for the design work.",
        "reasoning": "This extended the demonstrators beyond polymer FDM, so a single assembly exhibits two additive processes — a fit for hardware built in a multi-scale additive manufacturing lab. [Add the recorded engineering rationale for applying metal AM to this component.]",
        "tradeoffs": "[Add tradeoffs — e.g., cost, lead time, and post-processing relative to an FDM housing.]"
      }
    ],
    "solution": {
      "description": "A set of motor-driven, two-stage gearbox demonstrators backed by a parametric CAD system. The components are FDM 3D printed and iteratively optimized for that process; the housing incorporates metal additive manufacturing techniques and was designed in nTop; DC motors actuate the gears automatically for live lecture use.",
      "components": [
        "Parametric SolidWorks CAD models, including a parametrically modeled helical gear",
        "Two-stage gear train with components optimized for FDM 3D printing",
        "Gearbox housing incorporating metal additive manufacturing techniques, designed in nTop",
        "DC motor drive providing automated gear actuation",
        "Multiple gearbox variants built for undergraduate lecture demonstrations"
      ],
      "operation": "During a lecture, a DC motor drives the gear train, so the two-stage gearbox actuates on its own in front of the class. On the design side, a parameter change in SolidWorks regenerates the affected geometry and revised components go back to the FDM printer, while the housing follows its own nTop-based metal AM workflow. [Add demonstration procedure, run speeds, and power details.]"
    },
    "results": [
      {
        "metric": "Gear design cycle time",
        "value": "Reduced — [Add quantified reduction]",
        "note": "Parametric SolidWorks models regenerate variants from parameters instead of remodeling"
      },
      {
        "metric": "Gearbox demonstrators produced",
        "value": "Multiple — [Add exact count]",
        "note": "Two-stage designs, prototyped and used in undergraduate lectures"
      },
      {
        "metric": "Assembly operation",
        "value": "Reliable in demonstration use — [Add supporting evidence]",
        "note": "Achieved through iterative FDM-oriented component redesign"
      },
      {
        "metric": "Lecture deployment",
        "value": "[Add courses and number of lectures]",
        "note": "DC-motor actuation runs the demonstrations automatically in class"
      }
    ],
    "reflection": {
      "worked": "Committing to fully parametric CAD up front. Every FDM design iteration and every additional gearbox variant became a parameter change and a regeneration instead of a remodel — that discipline is what reduced the gear design cycle time.",
      "didnt": "The printed assemblies were not reliable as first designed. Getting FDM-printed gearboxes to operate consistently took repeated, deliberate redesign of components around the process. [Add a specific failure mode or an approach that was abandoned.]",
      "learned": "Designing for FDM is its own discipline — geometry that is correct in CAD still has to be reshaped around what the printer actually produces before an assembly runs reliably. Splitting the design between SolidWorks for the printed components and nTop for the housing's metal AM work also meant learning two additive design workflows within one assembly.",
      "next": "Quantify what this term left qualitative: measure the gear design cycle-time reduction and track demonstrator reliability across lectures. [Add any planned extensions — additional variants, further metal AM development, or classroom feedback.]"
    }
  },
  {
    "slug": "pneumatic-piston-assembly",
    "title": "Pneumatic Piston Mounting Assembly Redesign",
    "summary": "Redesigned a syrup-fouled pneumatic piston mount on a beverage line, extending expected service life by 200%.",
    "category": "Mechanical Design",
    "year": "2025",
    "featured": true,
    "outcome": "The redesign extended the assembly's expected service life by 200%, significantly reducing maintenance frequency and line downtime.",
    "role": "Engineering Intern",
    "team": "Refresco Beverages — maintenance/engineering, Mississauga ON",
    "duration": "2025 (within Jan–Aug 2025 internship)",
    "tools": [
      "SolidWorks",
      "Reverse engineering",
      "Technical drawings",
      "Vendor component integration"
    ],
    "figure": "piston",
    "overview": "At Refresco's Mississauga beverage plant, syrup and sugar buildup on a pneumatic piston caused mistimed can kickouts and frequent failures on the production line. Each failure meant a maintenance intervention and line downtime. During my internship I redesigned the piston's mounting assembly. I reverse-engineered the existing components in SolidWorks, redesigned the mounting plate to integrate a replacement piston from a different vendor, and designed a protective cover to prevent syrup splashes from reaching the mechanism. I produced technical drawings to document the redesign. The result: the assembly's expected service life extended by 200%, with significantly reduced maintenance frequency and downtime.",
    "problem": {
      "statement": "Syrup and sugar buildup on a pneumatic piston caused mistimed can kickouts and frequent failures on the beverage production line, driving repeated maintenance interventions and line downtime.",
      "limitations": "The starting point was the physical assembly on the line — I reverse-engineered the components in SolidWorks to get workable geometry. The replacement piston came from a different vendor, so the existing mounting plate could not accept it as designed. The mechanism sits where syrup splash reaches it, so the redesign had to survive the same environment that degraded the original. [Add other constraints — installation window, budget, washdown requirements.]",
      "requirements": "Integrate the replacement vendor piston into the existing assembly, prevent syrup splash from reaching the mechanism, and document the redesign in technical drawings. [Add quantitative requirements — timing, fit, loads, cleaning.]",
      "difficulty": "Nothing could be designed until the existing assembly was captured, so the project started with reverse-engineering the components in SolidWorks. The mounting plate then had to reconcile a different vendor's piston with an assembly it was never designed for, and every new part had to live in the syrup-splash environment that caused the original failures."
    },
    "specs": [
      {
        "parameter": "Expected service-life extension",
        "value": "200% over the original assembly"
      },
      {
        "parameter": "CAD software",
        "value": "SolidWorks"
      },
      {
        "parameter": "Deliverables",
        "value": "Adapted mounting plate design, protective splash cover design, technical drawing package"
      },
      {
        "parameter": "Replacement piston",
        "value": "[Add vendor and model]"
      },
      {
        "parameter": "Cover material",
        "value": "[Add material spec]"
      },
      {
        "parameter": "Mounting plate material",
        "value": "[Add material spec]"
      }
    ],
    "process": [
      {
        "title": "The failure",
        "body": "A pneumatic piston on the beverage production line drives can kickouts. The piston sat in the path of syrup and sugar splash, and the buildup caused mistimed kickouts and frequent failures — each one a maintenance call and line downtime. My task was to redesign the mounting assembly so the mechanism stopped failing. [Add failure frequency and downtime data before the redesign.]"
      },
      {
        "title": "Reverse engineering in SolidWorks",
        "body": "I reverse-engineered the assembly components in SolidWorks, working from the physical hardware. The output was an as-built model of the mounting arrangement — the reference geometry every later step depended on: the adapted plate had to mate with it, the cover had to fit around it, and the drawings had to describe it. [Add measurement tools and verification approach.]"
      },
      {
        "title": "Mounting plate redesign",
        "body": "The failing piston would be replaced with a unit from a different vendor, and the original mounting plate was not designed for it. Working from the reverse-engineered model, I adapted and redesigned the plate to integrate the new piston into the existing assembly. [Add the specific interface changes — mounting pattern, envelope, alignment — and how fit was verified.]"
      },
      {
        "title": "Protective cover",
        "body": "Replacing the piston did not remove the root cause: syrup splash would reach the new unit just as it had the old one. I designed a protective cover to prevent syrup splashes onto the mechanism, so the buildup that caused the mistimed kickouts is stopped before it starts. [Add cover material, mounting, and maintenance-access details.]"
      },
      {
        "title": "Technical drawings",
        "body": "I produced technical drawings for the redesigned mounting plate and cover to document the new assembly. [Add drawing standards, sheet count, and approval process.] During the same internship — as separate work — I also integrated technical documentation, assembly drawings, and BOMs into the plant's CMMS."
      },
      {
        "title": "Result",
        "body": "The redesigned assembly — replacement piston, adapted plate, and splash cover — extended the expected service life by 200% over the original, significantly reducing maintenance frequency and line downtime. Fewer failures meant fewer mistimed kickouts and fewer interventions on a running line. [Add in-service results since installation and the basis for the service-life estimate.]"
      }
    ],
    "decisions": [
      {
        "title": "Rebuild the assembly in CAD before redesigning it",
        "alternatives": "[Add alternatives considered]",
        "chosen": "Reverse-engineer the existing assembly components in SolidWorks and base the redesign on the as-built model.",
        "reasoning": "Both new parts had to mate with hardware already on the line: the adapted plate carries the replacement piston inside the existing assembly, and the cover has to shield the mechanism it protects. An accurate model of the current components gave every downstream deliverable — plate, cover, drawings — a common, trustworthy reference.",
        "tradeoffs": "Time spent capturing as-built geometry before any redesign work could start. [Add measurement uncertainty or rework encountered.]"
      },
      {
        "title": "Adapt the mounting plate to a different vendor's piston",
        "alternatives": "[Add alternatives considered]",
        "chosen": "Redesign the existing mounting plate so a replacement piston from another vendor integrates into the assembly.",
        "reasoning": "The original piston was failing frequently, and its replacement came from a different vendor with its own mounting interface. Redesigning the plate around the new piston let it take over the kickout function within the assembly already installed on the line.",
        "tradeoffs": "The plate becomes a custom part tied to the new piston's interface. [Add fabrication cost or lead-time implications.]"
      },
      {
        "title": "Add a splash cover instead of relying on the new piston alone",
        "alternatives": "[Add alternatives considered]",
        "chosen": "Design a protective cover that prevents syrup splashes from reaching the mechanism.",
        "reasoning": "Syrup and sugar buildup was the root cause of the mistimed kickouts and failures — a new piston in the same environment would face the same exposure. The cover cuts off the contamination path rather than treating the symptom.",
        "tradeoffs": "An additional part to fabricate and install. [Add maintenance-access considerations.]"
      }
    ],
    "solution": {
      "description": "The redesigned assembly pairs a replacement pneumatic piston from another vendor with an adapted mounting plate and a protective splash cover. I reverse-engineered the original components in SolidWorks, redesigned the plate around the new piston, designed the cover to block syrup splash, and documented the redesign in technical drawings.",
      "components": [
        "Adapted mounting plate — redesigned to integrate the replacement vendor piston into the existing assembly",
        "Replacement pneumatic piston — [Add vendor and model]",
        "Protective cover — prevents syrup splashes from reaching the mechanism; [Add material]",
        "Reverse-engineered SolidWorks model of the original assembly components",
        "Technical drawing package for the redesigned parts"
      ],
      "operation": "In operation, the pneumatic piston drives can kickouts on the production line. The adapted mounting plate positions the replacement piston within the existing assembly, and the protective cover shields the mechanism from syrup splashes. Keeping splash off the mechanism prevents the buildup that caused mistimed kickouts and failures, instead of leaving it to be cleaned off during maintenance."
    },
    "results": [
      {
        "metric": "Expected service life",
        "value": "+200%",
        "note": "Redesigned assembly relative to the original; expected value"
      },
      {
        "metric": "Maintenance frequency",
        "value": "[Add measured result]",
        "note": "Reported as significantly reduced"
      },
      {
        "metric": "Line downtime from this assembly",
        "value": "[Add measured result]",
        "note": "Reported as significantly reduced"
      }
    ],
    "reflection": {
      "worked": "Reverse-engineering the complete assembly before designing anything. The as-built SolidWorks model kept the adapted plate, the cover, and the drawings consistent with each other and with the hardware on the line. Treating the environment as part of the problem also worked: the cover targets the buildup that caused the failures, not just the part that wore out.",
      "didnt": "[Add what didn't go to plan — dead ends, rework, or issues found after installation.]",
      "learned": "Integrating another vendor's component into an existing machine is an interface problem — the engineering effort sits in the plate that reconciles the piston's mounting with an assembly it was never designed for. I also learned that production-line failures can be environmental: the syrup splash, not the piston's function, was what needed designing against.",
      "next": "Follow the assembly's in-service performance against the 200% service-life expectation. [Add planned follow-on work.]"
    }
  },
  {
    "slug": "arduino-robocar",
    "title": "Autonomous Line-Following Robot Car",
    "summary": "A C++/Arduino robot car that follows a line with light sensors — stable through a figure-eight course and up an inclined ramp.",
    "category": "Mechatronics",
    "year": "[Add year]",
    "featured": false,
    "outcome": "The car navigated a figure-eight course and climbed an inclined ramp autonomously, tracking the line with light-sensor distance logic.",
    "role": "Sole builder and programmer (personal project)",
    "team": "None — personal project",
    "duration": "[Add duration] ([Add year])",
    "tools": [
      "C++",
      "Arduino IDE",
      "Light sensors",
      "Distance-logic line tracking"
    ],
    "figure": "robocar",
    "overview": "I built and programmed an autonomous line-following robot car as a solo personal project. The control software is written in C++ in the Arduino IDE and tracks the line with light-sensor distance logic: the program reads the light sensors and steers the car to stay on the path with no manual control. I validated the build on two courses. The first was a figure-eight, whose geometry forces turns in both directions and a self-crossing the tracking logic has to get through cleanly. The second was an inclined ramp, which the car climbed while holding the line. It achieved stable navigation on both. The project is small, but it spans the full loop of a working robot: a physical build, embedded C++ control code, sensor-driven steering, and validation on courses that expose unstable logic.",
    "problem": {
      "statement": "Make a robot car follow a line fully autonomously, and prove it on two courses: a figure-eight path and an inclined ramp.",
      "limitations": "Personal project, built and programmed solo. Tracking relied on light-sensor distance logic running on the Arduino. [Add budget, parts, and time constraints.]",
      "requirements": "Stable navigation with no manual control: complete the figure-eight without losing the line and climb the ramp while tracking. [Add quantitative targets — speed, line width, ramp angle.]",
      "difficulty": "The figure-eight bends in both directions and crosses itself, so the steering logic has to stay stable through changing curvature and take the correct branch at the intersection. The ramp adds grade on top of tracking. [Add the specific failure modes that made this hard in practice.]"
    },
    "specs": [
      {
        "parameter": "Control software",
        "value": "C++, developed in the Arduino IDE"
      },
      {
        "parameter": "Path tracking method",
        "value": "Light-sensor distance logic"
      },
      {
        "parameter": "Demonstrated courses",
        "value": "Figure-eight path; inclined ramp"
      },
      {
        "parameter": "Microcontroller board",
        "value": "[Add Arduino board model]"
      },
      {
        "parameter": "Chassis and drive",
        "value": "[Add chassis, motors, motor driver]"
      },
      {
        "parameter": "Ramp incline",
        "value": "[Add ramp angle]"
      }
    ],
    "process": [
      {
        "title": "Building the car",
        "body": "I built the car as a solo personal project: a wheeled platform fitted with light sensors, which serve as the input for path tracking. [Add chassis, drive motors, motor driver, and power details.] [Add light-sensor type, count, and mounting position.] With the hardware together, the rest of the project was software — everything the car does on the course comes from how the program interprets the sensor readings."
      },
      {
        "title": "Writing the control program",
        "body": "I wrote the control software in C++ in the Arduino IDE. Tracking is driven by distance logic on the light-sensor readings: the program uses what the sensors report to decide the steering corrections that keep the car on the line. [Add algorithm details — how readings map to steering, thresholds or gains, and loop timing.] The target behavior was tracking that stays stable through continuous turns, since the validation course was a figure-eight."
      },
      {
        "title": "Validating on the figure-eight",
        "body": "The figure-eight course was the main tracking test. Its geometry is the hard part: the path curves in both directions and crosses itself, and the tracking logic has to hold the line through the intersection. The car completed the full figure-eight autonomously with stable navigation. [Add course dimensions, line width, surface, and run speed.] [Add what failed on early attempts and what changed.]"
      },
      {
        "title": "Climbing the ramp",
        "body": "The second test moved off flat ground: the car had to follow the line up an inclined ramp, which checks that tracking and drive both hold on a grade. The car climbed the ramp with stable navigation, completing the project's second demonstration alongside the figure-eight. [Add ramp angle, surface, and any changes needed for the climb.]"
      }
    ],
    "decisions": [
      {
        "title": "Light sensors + distance logic for tracking",
        "alternatives": "[Add alternatives considered]",
        "chosen": "Light sensors provide the path signal; distance logic in the C++ program turns their readings into steering.",
        "reasoning": "A simple sensing input suited a solo build, and the distance logic in software carried the rest: the car achieved stable navigation through the figure-eight and up the ramp on this tracking approach.",
        "tradeoffs": "Tracking quality is bounded by what the light sensors report; anything that degrades the readings degrades the tracking. [Add limitations observed in practice.]"
      },
      {
        "title": "C++ in the Arduino IDE for the control software",
        "alternatives": "[Add alternatives considered]",
        "chosen": "All control logic written in C++ and built and flashed through the Arduino IDE.",
        "reasoning": "The Arduino toolchain gets C++ onto small robot hardware with minimal setup, which suited a solo project where the effort belonged in the tracking logic rather than the toolchain.",
        "tradeoffs": "[Add tradeoffs]"
      }
    ],
    "solution": {
      "description": "An autonomous line-following car: a C++ program written in the Arduino IDE reads the car's light sensors and applies distance logic to steer it along the path with no manual control.",
      "components": [
        "Wheeled car platform — [Add chassis, motors, and motor driver]",
        "Light sensors for path detection — [Add type, count, and placement]",
        "C++ control program (Arduino IDE) implementing the light-sensor distance logic",
        "Arduino board running the program — [Add board model]",
        "Power system — [Add battery/power details]"
      ],
      "operation": "On a run, the program loops on the light-sensor readings and applies the distance logic to keep the car steering along the line. Demonstrated runs: the full figure-eight course and a climb up the inclined ramp, both completed with stable navigation and no manual intervention."
    },
    "results": [
      {
        "metric": "Figure-eight course",
        "value": "Completed autonomously with stable navigation",
        "note": "Both turn directions plus the path crossing"
      },
      {
        "metric": "Inclined ramp",
        "value": "Climbed with stable line tracking",
        "note": "[Add ramp angle and surface]"
      },
      {
        "metric": "Run speed",
        "value": "[Add measured result]"
      },
      {
        "metric": "Repeatability (success rate over runs)",
        "value": "[Add measured result]"
      }
    ],
    "reflection": {
      "worked": "Light-sensor distance logic was enough. The car achieved stable navigation on both demonstration courses — the figure-eight and the inclined ramp — with tracking driven by the light-sensor readings.",
      "didnt": "[Add what didn't work — early failure modes, unstable runs, or hardware issues worth recording]",
      "learned": "Control code for a physical robot is only proven on the course. The program counted as working when the car held the line through the figure-eight and up the ramp — not when the logic looked right in the editor.",
      "next": "[Add next steps — planned upgrades or a follow-on build]"
    }
  }
]
