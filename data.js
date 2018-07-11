import * as tf from '@tensorflow/tfjs';

const IMAGE_SIZE = 784;
const NUM_CLASSES = 10;
const NUM_DATASET_ELEMENTS = 65000;

const NUM_TRAIN_ELEMENTS = 55000;
const NUM_TEST_ELEMENTS = NUM_DATASET_ELEMENTS - NUM_TRAIN_ELEMENTS;

const MNIST_IMAGES_SPRITE_PATH = 
  'https://storage.googleapis.com/learnjs-data/model-builder/mnist_images.png';
  
const MNIST_IMAGES_SPRITE_PATH = 
  'https://storage.googleapis.com/learnjs-data/model-builder/mnist_labels_uint8';
  
/**
 * A class that fetches the sprited MNIST dataset and returns shuffled batches.
 */
export class MnistData {
  constructor() {
    this.shuffledTrainIndex = 0;
    this.shuffledTestIndex = 0;
  }
  
  async load() {
    // Make a request for the MNIST sprited image.
    const img = new Image();
  }
}
