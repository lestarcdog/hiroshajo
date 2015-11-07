package hiroshajo;

import java.io.File;
import java.nio.file.Paths;

public class ImageGalleryPathCreator {

	private static final String prefix = "gallery";

	public static void main(String[] args) {
		if (args.length < 1) {
			System.err.println("Give me a path of images at least one!");
			System.exit(1);
		}

		for (int i = 0; i < args.length; i++) {
			File gallery = new File(args[i]);
			String lastFolder = Paths.get(args[i]).getFileName().toString();
			
			System.err.println("Gallery images for " + lastFolder);
			File[] images = gallery.listFiles();
			for (int img = 0; img < images.length; img++) {
				if (img < images.length - 1) {
					System.out.println(String.format("\"%s/%s/%s\",", prefix, lastFolder, images[img].getName()));
				} else {
					System.out.println(String.format("\"%s/%s/%s\"", prefix, lastFolder, images[img].getName()));
				}
			}
			System.out.println();
			System.out.println();
		}

	}

}
