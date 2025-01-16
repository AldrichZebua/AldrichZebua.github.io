import {
  AboutCV,
  AboutKeras,
  AboutML,
  AboutPyTorch,
  AboutTensorFlow,
} from "../share_compo/SkillAbout";

export const AISkills = () => {
  return (
    <div className="mt-10">
      <div className="flex justify-center text-xl font-bold mb-5">
        Artificial Intelligence & Machine Learning
      </div>
      <div className="flex flex-wrap justify-center gap-8 px-5">
        <div className="flex flex-col basis-full sm:basis-1/2 lg:basis-3/4">
          <h2 className="text-lg font-semibold">Programming & Libraries</h2>
          <ul className="list-disc mt-2 space-y-2">
            <li>
              Expert in Python and frameworks like TensorFlow, PyTorch, and
              Scikit-learn.
            </li>
            <li>
              Knowledge of data manipulation libraries: Keras, NumPy, Pandas,
              Matplotlib, and SciPy.
            </li>
          </ul>
        </div>
        <div className="flex flex-col basis-full sm:basis-1/2 lg:basis-3/4">
          <h2 className="text-lg font-semibold">Machine Learning</h2>
          <ul className="list-disc mt-2 space-y-2">
            <li>
              Strong understanding of supervised and unsupervised learning
              algorithms.
            </li>
            <li>
              Experience in model optimization, hyperparameter tuning, and
              deployment using TensorFlow Serving and FastAPI.
            </li>
          </ul>
        </div>
        <div className="flex flex-col basis-full sm:basis-1/2 lg:basis-3/4">
          <h2 className="text-lg font-semibold">
            Deep Learning & Computer Vision
          </h2>
          <ul className="list-disc mt-2 space-y-2">
            <li>
              Specialized in convolutional neural networks (CNNs) and
              architectures like ResNet, YOLO, DenseNet, and MobileNet.
            </li>
            <li>
              Experience with image preprocessing, augmentation, and real-time
              object detection.
            </li>
          </ul>
        </div>
        <div className="flex flex-col basis-full sm:basis-1/2 lg:basis-3/4">
          <h2 className="text-lg font-semibold">
            Natural Language Processing (NLP)
          </h2>
          <ul className="list-disc mt-2 space-y-2">
            <li>
              Familiarity with text classification, sentiment analysis, and
              transformer models like BERT.
            </li>
          </ul>
        </div>
      </div>
      <div className="flex justify-center gap-5 mt-10">
        <AboutML />
        <AboutCV />
        <AboutTensorFlow />
        <AboutKeras />
        <AboutPyTorch />
      </div>
    </div>
  );
};
